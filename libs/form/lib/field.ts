import { Event } from '@jtjs/event';
import { FieldValidator, FieldValue, FieldValueTypeName, ValidationResult } from './model';
import { Optional } from './types/types';

export interface FieldOptions<TFieldValue extends FieldValue> {
  initialValue: TFieldValue;
  valueTypeName: FieldValueTypeName<TFieldValue>;
  validators?: FieldValidator[];
}

export class Field<TFieldValue extends FieldValue = any> {
  onValueChange = new Event<(newValue: Optional<TFieldValue>, oldValue: Optional<TFieldValue>) => void>();

  #initialValue: TFieldValue;
  #value: Optional<TFieldValue>;
  #options: FieldOptions<TFieldValue>;

  get value(): Optional<TFieldValue> {
    return this.#value;
  }
  private set value(val: Optional<TFieldValue>) {
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
  }

  initialize = () => {
    this.value = this.#initialValue;
  };

  validate = async (): Promise<ValidationResult> => {
    return (await Promise.all(this.#options.validators?.map((validator) => validator(this)) ?? [])).flat(
      Infinity
    ) as ValidationResult;
  };
}
