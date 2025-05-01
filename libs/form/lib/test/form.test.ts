import { describe, expect, test, vi } from 'vitest';
import { Field } from '../field';
import { Form } from '../form';

describe('Form', () => {
  describe('values', () => {
    const handleSubmit = vi.fn();

    test(`works with a flat object`, () => {
      const form = new Form<{
        num: number;
        str: string;
        bool: boolean;
      }>({ onSubmit: handleSubmit });

      form.registerField('num', new Field({ initialValue: 10, valueTypeName: 'number' }));
      form.registerField('str', new Field({ initialValue: 'something', valueTypeName: 'string' }));
      form.registerField('bool', new Field({ initialValue: true, valueTypeName: 'boolean' }));

      expect(form.values).toEqual({
        num: 10,
        str: 'something',
        bool: true,
      });
    });
    test(`works with nested objects`, () => {
      const form = new Form<{
        num: number;
        str: string;
        bool: boolean;
        nested: {
          num1: number;
          str1: string;
          bool: boolean;
        };
      }>({ onSubmit: handleSubmit });

      form.registerField('num', new Field({ initialValue: 10, valueTypeName: 'number' }));
      form.registerField('str', new Field({ initialValue: 'something', valueTypeName: 'string' }));
      form.registerField('bool', new Field({ initialValue: true, valueTypeName: 'boolean' }));

      form.registerField('nested.num1', new Field({ initialValue: 100, valueTypeName: 'number' }));
      form.registerField('nested.str1', new Field({ initialValue: 'else', valueTypeName: 'string' }));
      form.registerField('nested.bool', new Field({ initialValue: false, valueTypeName: 'boolean' }));

      expect(form.values).toEqual({
        num: 10,
        str: 'something',
        bool: true,
        nested: {
          num1: 100,
          str1: 'else',
          bool: false,
        },
      });
    });
    test(`works with deeply nested objects`, () => {
      const form = new Form<{
        num: number;
        str: string;
        bool: boolean;
        nested: {
          num1: number;
          str1: string;
          bool: boolean;
          nestedAgain: {
            str: string;
          };
        };
      }>({ onSubmit: handleSubmit });

      form.registerField('num', new Field({ initialValue: 10, valueTypeName: 'number' }));
      form.registerField('str', new Field({ initialValue: 'something', valueTypeName: 'string' }));
      form.registerField('bool', new Field({ initialValue: true, valueTypeName: 'boolean' }));

      form.registerField('nested.num1', new Field({ initialValue: 100, valueTypeName: 'number' }));
      form.registerField('nested.str1', new Field({ initialValue: 'else', valueTypeName: 'string' }));
      form.registerField('nested.bool', new Field({ initialValue: false, valueTypeName: 'boolean' }));

      form.registerField('nested.nestedAgain.str', new Field({ initialValue: 'test', valueTypeName: 'string' }));

      expect(form.values).toEqual({
        num: 10,
        str: 'something',
        bool: true,
        nested: {
          num1: 100,
          str1: 'else',
          bool: false,
          nestedAgain: {
            str: 'test',
          },
        },
      });
    });
    test(`works with primitive arrays at the root`, () => {
      const form = new Form<{
        num: number;
        str: string;
        bool: boolean;
        nested: {
          num1: number;
          str1: string;
          bool: boolean;
        };
        bools: boolean[];
        strs: string[];
        nums: number[];
      }>({ onSubmit: handleSubmit });

      form.registerField('num', new Field({ initialValue: 10, valueTypeName: 'number' }));
      form.registerField('str', new Field({ initialValue: 'something', valueTypeName: 'string' }));
      form.registerField('bool', new Field({ initialValue: true, valueTypeName: 'boolean' }));

      form.registerField('nested.num1', new Field({ initialValue: 100, valueTypeName: 'number' }));
      form.registerField('nested.str1', new Field({ initialValue: 'else', valueTypeName: 'string' }));
      form.registerField('nested.bool', new Field({ initialValue: false, valueTypeName: 'boolean' }));

      form.registerField('bools.0', new Field({ initialValue: true, valueTypeName: 'boolean' }));
      form.registerField('bools.1', new Field({ initialValue: false, valueTypeName: 'boolean' }));
      form.registerField('strs.0', new Field({ initialValue: 'test1', valueTypeName: 'string' }));
      form.registerField('strs.1', new Field({ initialValue: 'test2', valueTypeName: 'string' }));
      form.registerField('nums.0', new Field({ initialValue: 200, valueTypeName: 'number' }));
      form.registerField('nums.1', new Field({ initialValue: 300, valueTypeName: 'number' }));

      expect(form.values).toEqual({
        num: 10,
        str: 'something',
        bool: true,
        nested: {
          num1: 100,
          str1: 'else',
          bool: false,
        },
        bools: [true, false],
        strs: ['test1', 'test2'],
        nums: [200, 300],
      });
    });
    test(`works with primitive nested arrays`, () => {
      const form = new Form<{
        num: number;
        str: string;
        bool: boolean;
        nested: {
          num1: number;
          str1: string;
          bool: boolean;
          bools: boolean[];
          strs: string[];
          nums: number[];
        };
      }>({ onSubmit: handleSubmit });

      form.registerField('num', new Field({ initialValue: 10, valueTypeName: 'number' }));
      form.registerField('str', new Field({ initialValue: 'something', valueTypeName: 'string' }));
      form.registerField('bool', new Field({ initialValue: true, valueTypeName: 'boolean' }));

      form.registerField('nested.num1', new Field({ initialValue: 100, valueTypeName: 'number' }));
      form.registerField('nested.str1', new Field({ initialValue: 'else', valueTypeName: 'string' }));
      form.registerField('nested.bool', new Field({ initialValue: false, valueTypeName: 'boolean' }));

      form.registerField('nested.bools.0', new Field({ initialValue: true, valueTypeName: 'boolean' }));
      form.registerField('nested.bools.1', new Field({ initialValue: false, valueTypeName: 'boolean' }));
      form.registerField('nested.strs.0', new Field({ initialValue: 'test1', valueTypeName: 'string' }));
      form.registerField('nested.strs.1', new Field({ initialValue: 'test2', valueTypeName: 'string' }));
      form.registerField('nested.nums.0', new Field({ initialValue: 200, valueTypeName: 'number' }));
      form.registerField('nested.nums.1', new Field({ initialValue: 300, valueTypeName: 'number' }));

      expect(form.values).toEqual({
        num: 10,
        str: 'something',
        bool: true,
        nested: {
          num1: 100,
          str1: 'else',
          bool: false,
          bools: [true, false],
          strs: ['test1', 'test2'],
          nums: [200, 300],
        },
      });
    });
    test(`works with nested object arrays`, () => {
      const form = new Form<{
        num: number;
        str: string;
        bool: boolean;
        nested: {
          num1: number;
          str1: string;
          bool: boolean;
          objs: {
            testNest: string;
            nested: {
              beep: number;
            };
          }[];
        };
      }>({ onSubmit: handleSubmit });

      form.registerField('num', new Field({ initialValue: 10, valueTypeName: 'number' }));
      form.registerField('str', new Field({ initialValue: 'something', valueTypeName: 'string' }));
      form.registerField('bool', new Field({ initialValue: true, valueTypeName: 'boolean' }));

      form.registerField('nested.num1', new Field({ initialValue: 100, valueTypeName: 'number' }));
      form.registerField('nested.str1', new Field({ initialValue: 'else', valueTypeName: 'string' }));
      form.registerField('nested.bool', new Field({ initialValue: false, valueTypeName: 'boolean' }));

      form.registerField('nested.objs.0.testNest', new Field({ initialValue: 'truth', valueTypeName: 'string' }));
      form.registerField('nested.objs.0.nested.beep', new Field({ initialValue: 9001, valueTypeName: 'number' }));
      form.registerField('nested.objs.1.testNest', new Field({ initialValue: 'anotha one', valueTypeName: 'string' }));
      form.registerField('nested.objs.1.nested.beep', new Field({ initialValue: 1, valueTypeName: 'number' }));

      expect(form.values).toEqual({
        num: 10,
        str: 'something',
        bool: true,
        nested: {
          num1: 100,
          str1: 'else',
          bool: false,
          objs: [
            {
              testNest: 'truth',
              nested: {
                beep: 9001,
              },
            },
            {
              testNest: 'anotha one',
              nested: {
                beep: 1,
              },
            },
          ],
        },
      });
    });
  });
});
