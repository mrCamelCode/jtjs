import { Field } from './field';
import { FieldValue, FormMetadata, FormValidationResult, FormValidator, ValidationResult } from './model';
import { PropertyAtPath, PropertyPath } from './types/pathing';
import { DeepPartial, MaybeAsync } from './types/types';
import { ValidationChain } from './validation/validation-chain';

export interface FormOptions<TFormValues extends object> {
  onSubmit: (values: TFormValues) => MaybeAsync<void>;
  formValidation?: ValidationChain<FormValidator<TFormValues>>;
}

/*
 * JT TODO WANTS:
 *   - If you get the field at a particular path, TS knows the vaule type of that field.
 */
export class Form<TFormValues extends object> {
  #options: FormOptions<TFormValues>;
  #fieldMap: Map<PropertyPath<TFormValues>, Field> = new Map();
  #metadata: FormMetadata = {
    isSubmitting: false,
  };

  get values(): DeepPartial<TFormValues> {
    // JT TODO
    return {} as any;
  }

  constructor(options: FormOptions<TFormValues>) {
    this.#options = options;
  }

  registerField = <T extends PropertyPath<TFormValues>>(
    path: T,
    field: Field<PropertyAtPath<TFormValues, T> extends FieldValue ? PropertyAtPath<TFormValues, T> : never>
  ): void => {
    this.#fieldMap.set(path, field);
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
        // are enforcing any rules to ensure the values are in the correct shape.
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
    const form = (await this.#options.formValidation?.validate(this.values)) ?? [];
    const fields = new Map<PropertyPath<TFormValues>, ValidationResult>();

    for (const [path, field] of this.#fieldMap.entries()) {
      fields.set(path, await field.validate());
    }

    return {
      form,
      fields,
    };
  };
}
