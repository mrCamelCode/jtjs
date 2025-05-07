import { Event } from '@jtjs/event';
import { FieldValidator, FieldValue, FieldValueTypeName, ValidationResult } from './model';
import { Optional } from './types/types';
import { ValidationChain } from './validation/validation-chain';

type Widen<T> = T extends infer Value ? Value : never;

export interface FieldOptions<TFieldValue extends FieldValue> {
  valueTypeName: FieldValueTypeName<TFieldValue>;
  // For some reason, using the initial value as a way for TS to infer TFieldValue
  // results in TS' inference being too narrow. Setting it as `10` makes TS believe
  // the field is `Field<10>` as opposed to `Field<number>`. This utility type widens something
  // like `10` to `number`.
  initialValue?: Widen<TFieldValue>;
  validators?: FieldValidator<TFieldValue>[];
}

export class Field<TFieldValue extends FieldValue = undefined> {
  onValueChange = new Event<(newValue: Optional<Widen<TFieldValue>>, oldValue: Optional<Widen<TFieldValue>>) => void>();

  #initialValue: Optional<Widen<TFieldValue>>;
  #value: Optional<Widen<TFieldValue>>;
  #validationChain: ValidationChain<FieldValidator<TFieldValue>>;
  #options: FieldOptions<TFieldValue>;

  get value() {
    return this.#value;
  }

  set value(val: Optional<Widen<TFieldValue>>) {
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
