import { describe, expect, test } from 'vitest';
import { ValidationChain } from '../validation-chain';

describe('ValidationChain', () => {
  describe('validate', () => {
    test(`validators can be async or sync`, async () => {
      const chain = new ValidationChain([() => 'test', async () => 'async', () => 'test2']);

      const results = await chain.validate();

      expect(results).toEqual(['test', 'async', 'test2']);
    });
    test(`undefineds are stripped`, async () => {
      const chain = new ValidationChain([() => 'test', () => undefined, () => 'test2']);

      const results = await chain.validate();

      expect(results).toEqual(['test', 'test2']);
    });
    test(`empty strings are stripped`, async () => {
      const chain = new ValidationChain([() => 'test', () => '', () => 'test2']);

      const results = await chain.validate();

      expect(results).toEqual(['test', 'test2']);
    });
    test(`whitespace strings are stripped`, async () => {
      const chain = new ValidationChain([() => 'test', () => '     ', () => 'test2']);

      const results = await chain.validate();

      expect(results).toEqual(['test', 'test2']);
    });
  });
});
