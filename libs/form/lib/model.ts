import { Field } from './field';
import { FormValuePath } from './types/pathing';
import { DeepPartial, MaybeAsync, Optional } from './types/types';

export type AnyObject = { [key: string]: unknown };

export type ValidationResult = string | undefined;
export type FormValidator<TFormValues> = (formValues: DeepPartial<TFormValues>) => MaybeAsync<ValidationResult>;
export interface FormValidationResult<TFormValues> {
  form: ValidationResult[];
  fields: Map<FormValuePath<TFormValues>, ValidationResult[]>;
}

export interface FormMetadata<TFormValues extends object> {
  isSubmitting: boolean;
  /**
   * The result of the last-run validation.
   */
  validationResult?: FormValidationResult<TFormValues>;
}

export type FieldValidator = (field: Field) => MaybeAsync<ValidationResult>;

export type FieldValue = string | string[] | number | number[] | boolean | boolean[] | File | File[];

export type FieldValueTypeName<T> = T extends Optional<string>
  ? 'string'
  : T extends Optional<string[]>
  ? 'string[]'
  : T extends Optional<number>
  ? 'number'
  : T extends Optional<number[]>
  ? 'number[]'
  : T extends Optional<boolean>
  ? 'boolean'
  : T extends Optional<boolean[]>
  ? 'boolean[]'
  : T extends Optional<File>
  ? 'File'
  : T extends Optional<File[]>
  ? 'File[]'
  : never;
