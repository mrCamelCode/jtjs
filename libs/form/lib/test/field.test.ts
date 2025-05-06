import { describe, expect, test, vi } from 'vitest';
import { Field } from '../field';

describe('Field', () => {
  describe('onValueChange', () => {
    test(`updating value triggers event`, () => {
      const field = new Field<string>({ initialValue: 'test', valueTypeName: 'string' });

      const onValueChange = vi.fn();

      field.onValueChange.subscribe(onValueChange);

      expect(onValueChange).not.toHaveBeenCalled();

      field.value = 'new';

      expect(onValueChange).toHaveBeenCalledOnce();
      expect(onValueChange).toHaveBeenLastCalledWith('new', 'test');
    });
  });

  describe('initialize', () => {
    test(`field has initial value afterwards`, () => {
      const field = new Field<string>({ initialValue: 'test', valueTypeName: 'string' });

      field.value = 'new';

      field.initialize();

      expect(field.value).toBe('test');
    });
  });

  describe('validate', () => {
    test(`all messages are included`, async () => {
      const field = new Field<string>({
        initialValue: 'test',
        valueTypeName: 'string',
        validators: [
          (field) => (field.value === 'test' ? 'BAD' : undefined),
          (field) => (typeof field.value === 'string' ? 'TYPE' : undefined),
        ],
      });

      const result = await field.validate();

      expect(result).toEqual(['BAD', 'TYPE']);
    });
    test(`no messages are returned when all validation passes`, async () => {
      const field = new Field<string>({
        initialValue: 'test',
        valueTypeName: 'string',
        validators: [
          (field) => (field.value !== 'test' ? 'BAD' : undefined),
          (field) => (typeof field.value !== 'string' ? 'TYPE' : undefined),
        ],
      });

      const result = await field.validate();

      expect(result).toEqual([]);
    });
  });
});
