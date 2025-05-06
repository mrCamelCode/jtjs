import { Field } from './field';
import { FieldValue, FormMetadata, FormValidationResult, FormValidator } from './model';
import { FormValuePath, FormValueTypeAtPath } from './types/pathing';
import { DeepPartial, MaybeAsync } from './types/types';
import { ValidationChain } from './validation/validation-chain';

export interface FormOptions<TFormValues extends object> {
  onSubmit: (values: TFormValues) => MaybeAsync<void>;
  validators?: FormValidator<TFormValues>[];
}

type FieldAtPath<TFormValues, TFieldPath extends FormValuePath<TFormValues>> = Field<
  FormValueTypeAtPath<TFormValues, TFieldPath> extends FieldValue ? FormValueTypeAtPath<TFormValues, TFieldPath> : never
>;

export class Form<TFormValues extends object> {
  #options: FormOptions<TFormValues>;
  #fieldMap: Map<FormValuePath<TFormValues>, Field> = new Map();
  #metadata: FormMetadata<TFormValues> = {
    isSubmitting: false,
  };
  #validationChain: ValidationChain<FormValidator<TFormValues>>;

  get values(): DeepPartial<TFormValues> {
    const vals: Record<string, any> = {};

    const setAtPath = <T>(obj: Record<string, any>, pathSegments: string[], value: T) => {
      const indexPattern = /^\d+$/;

      const [currentPathSegment, ...nextPathSegments] = pathSegments;
      const isLeaf = nextPathSegments.length === 0;

      if (isLeaf) {
        obj[currentPathSegment] = value;
      } else {
        const isCurrentPropertyArray = indexPattern.test(nextPathSegments[0]);

        if (!(currentPathSegment in obj)) {
          obj[currentPathSegment] = isCurrentPropertyArray ? [] : {};
        }

        setAtPath(obj[currentPathSegment], nextPathSegments, value);
      }
    };

    [...this.#fieldMap.entries()].forEach(([path, field]) => {
      setAtPath(vals, (path as string).split('.'), field.value);
    });

    return vals as DeepPartial<TFormValues>;
  }

  get metadata(): FormMetadata<TFormValues> {
    return this.#metadata;
  }

  get #fields(): Field[] {
    return [...this.#fieldMap.values()];
  }

  constructor(options: FormOptions<TFormValues>) {
    this.#options = options;

    this.#validationChain = new ValidationChain(this.#options.validators);
  }

  registerField = <T extends FormValuePath<TFormValues>>(path: T, field: FieldAtPath<TFormValues, T>): void => {
    this.#fieldMap.set(path, field);
  };

  initialize = () => {
    this.#fields.forEach((field) => {
      field.initialize();
    });
  };

  requestSubmit = async (): Promise<void> => {
    this.#metadata.isSubmitting = true;

    try {
      const validationResult = await this.validate();

      const hasFormErrors = validationResult.form.length > 0;
      const hasFieldErrors = [...validationResult.fields.entries()].some(([, result]) => result.length > 0);
      const hasErrors = hasFormErrors || hasFieldErrors;

      if (!hasErrors) {
        // Make the good-faith assumption that they have registered all fields and their validators
        // are enforcing any rules to ensure the values are in the correct shape and satisfy any optionality.
        await this.#options.onSubmit(this.values as TFormValues);
      }
    } catch (error) {
      throw new Error(
        `An error occurred during form submission. This indicates an issue with one of your validators or your submission handler.` +
          ` Ensure that none of your validators nor submission handler are throwing.`,
        { cause: error }
      );
    } finally {
      this.#metadata.isSubmitting = false;
    }
  };

  validate = async (): Promise<FormValidationResult<TFormValues>> => {
    const form = await this.#validationChain.validate(this.values);
    const fields: FormValidationResult<TFormValues>['fields'] = new Map();

    for (const [path, field] of this.#fieldMap.entries()) {
      fields.set(path, await field.validate());
    }

    const result = {
      form,
      fields,
    };

    this.#metadata.validationResult = result;

    return result;
  };

  getField = <T extends FormValuePath<TFormValues>>(fieldPath: T): FieldAtPath<TFormValues, T> | undefined => {
    return this.#fieldMap.get(fieldPath);
  };

  getValue = <T extends FormValuePath<TFormValues>>(fieldPath: T): FormValueTypeAtPath<TFormValues, T> | undefined => {
    return this.getField(fieldPath)?.value;
  };

  setValue = <T extends FormValuePath<TFormValues>>(
    fieldPath: T,
    value: FormValueTypeAtPath<TFormValues, T> extends FieldValue ? FormValueTypeAtPath<TFormValues, T> : never
  ) => {
    const field = this.getField(fieldPath);

    if (field) {
      field.value = value;
    }
  };
}
