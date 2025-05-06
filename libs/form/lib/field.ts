import { Event } from '@jtjs/event';
import { FieldValidator, FieldValue, FieldValueTypeName, ValidationResult } from './model';
import { Optional } from './types/types';
import { ValidationChain } from './validation/validation-chain';

export interface FieldOptions<TFieldValue extends FieldValue> {
  initialValue: TFieldValue;
  valueTypeName: FieldValueTypeName<TFieldValue>;
  validators?: FieldValidator[];
}

export class Field<TFieldValue extends FieldValue = any> {
  onValueChange = new Event<(newValue: Optional<TFieldValue>, oldValue: Optional<TFieldValue>) => void>();

  #initialValue: TFieldValue;
  #value: Optional<TFieldValue>;
  #validationChain: ValidationChain<FieldValidator>;
  #options: FieldOptions<TFieldValue>;

  get value(): Optional<TFieldValue> {
    return this.#value;
  }

  set value(val: Optional<TFieldValue>) {
    if (val !== this.#value) {
      const old = this.#value;

      this.#value = val;

      this.onValueChange.trigger(this.#value, old);
    }
  }

  constructor(options: FieldOptions<TFieldValue>) {
    this.#options = options;

    this.#initialValue = options.initialValue;
    this.#value = options.initialValue;
    this.#validationChain = new ValidationChain(this.#options.validators);
  }

  initialize = () => {
    this.value = this.#initialValue;
  };

  validate = async (): Promise<ValidationResult[]> => {
    return this.#validationChain.validate(this);
  };
}
