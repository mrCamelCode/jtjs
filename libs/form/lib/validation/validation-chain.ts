import { ValidationResult } from '../model';
import { MaybeAsync } from '../types/types';

export class ValidationChain<TValidator extends (...args: any[]) => MaybeAsync<string[]>> {
  #validators: TValidator[] = [];

  constructor(validators: TValidator[] = []) {
    this.#validators = validators;
  }

  async validate(...args: Parameters<TValidator>): Promise<ValidationResult> {
    return (await Promise.all(this.#validators.map((validator) => validator(...args)))).flat(Infinity) as string[];
  }
}
