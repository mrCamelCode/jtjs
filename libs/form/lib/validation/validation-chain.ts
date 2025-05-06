import { ValidationResult } from '../model';
import { MaybeAsync } from '../types/types';

export class ValidationChain<TValidator extends (...args: any[]) => MaybeAsync<ValidationResult>> {
  #validators: TValidator[] = [];

  constructor(validators: TValidator[] = []) {
    this.#validators = validators;
  }

  async validate(...args: Parameters<TValidator>): Promise<ValidationResult[]> {
    return (await Promise.all(this.#validators.map((validator) => validator(...args))))
      .flat(Infinity)
      .filter((str) => Boolean(str?.trim())) as ValidationResult[];
  }
}
