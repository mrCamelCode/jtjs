import { Field } from './field';
import { PropertyPath } from './types/pathing';
import { DeepPartial, MaybeAsync, Optional } from './types/types';

export type AnyObject = { [key: string]: unknown };

export type ValidationResult = string[];
export type FormValidator<TFormValues> = (formValues: DeepPartial<TFormValues>) => MaybeAsync<ValidationResult>;
export interface FormValidationResult<TFormValues> {
  form: ValidationResult;
  fields: Map<PropertyPath<TFormValues>, ValidationResult>;
}

export interface FormMetadata {
  isSubmitting: boolean;
}

export type FieldValidator = (field: Field) => MaybeAsync<string[]>;

// JT TODO: `File` would also probably be a useful type.
// export type FieldValueTypeName =
//   | 'string'
//   | 'string[]'
//   | 'number'
//   | 'number[]'
//   | 'boolean'
//   | 'boolean[]'
//   | 'File'
//   | 'File[]';

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
