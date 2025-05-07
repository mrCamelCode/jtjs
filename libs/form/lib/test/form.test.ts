import { afterEach, describe, expect, test, vi } from 'vitest';
import { Field } from '../field';
import { Form } from '../form';

const handleSubmit = vi.fn();

describe('Form', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('values and registration', () => {
    test(`works with a flat object`, () => {
      const form = new Form<{
        num: number;
        str: string;
        bool: boolean;
      }>();

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
      }>();

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
      }>();

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
      }>();

      form.registerField('num', new Field({ initialValue: 10, valueTypeName: 'number' }));
      form.registerField('str', new Field({ initialValue: 'something', valueTypeName: 'string' }));
      form.registerField('bool', new Field({ initialValue: true, valueTypeName: 'boolean' }));

      form.registerField('nested.num1', new Field({ initialValue: 100, valueTypeName: 'number' }));
      form.registerField('nested.str1', new Field({ initialValue: 'else', valueTypeName: 'string' }));
      form.registerField('nested.bool', new Field({ initialValue: false, valueTypeName: 'boolean' }));

      form.registerField('bools', new Field({ initialValue: [true, false], valueTypeName: 'boolean[]' }));
      form.registerField('strs', new Field({ initialValue: ['test1', 'test2'], valueTypeName: 'string[]' }));
      form.registerField('nums', new Field({ initialValue: [200, 300], valueTypeName: 'number[]' }));

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
      }>();

      form.registerField('num', new Field({ initialValue: 10, valueTypeName: 'number' }));
      form.registerField('str', new Field({ initialValue: 'something', valueTypeName: 'string' }));
      form.registerField('bool', new Field({ initialValue: true, valueTypeName: 'boolean' }));

      form.registerField('nested.num1', new Field({ initialValue: 100, valueTypeName: 'number' }));
      form.registerField('nested.str1', new Field({ initialValue: 'else', valueTypeName: 'string' }));
      form.registerField('nested.bool', new Field({ initialValue: false, valueTypeName: 'boolean' }));

      form.registerField('nested.bools', new Field({ initialValue: [true, false], valueTypeName: 'boolean[]' }));
      form.registerField('nested.strs', new Field({ initialValue: ['test1', 'test2'], valueTypeName: 'string[]' }));
      form.registerField('nested.nums', new Field({ initialValue: [200, 300], valueTypeName: 'number[]' }));

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
      }>();

      form.registerField('num', new Field({ initialValue: 10, valueTypeName: 'number' }));
      form.registerField('str', new Field({ initialValue: 'something', valueTypeName: 'string' }));
      form.registerField('bool', new Field({ initialValue: true, valueTypeName: 'boolean' }));

      form.registerField('nested.num1', new Field({ initialValue: 100, valueTypeName: 'number' }));
      form.registerField('nested.str1', new Field({ initialValue: 'else', valueTypeName: 'string' }));
      form.registerField('nested.bool', new Field({ initialValue: false, valueTypeName: 'boolean' }));

      // Object arrays represent an array of other fields--like a repeatable subform.
      // As such, you don't register them at the array level you register each element's
      // individual fields.
      // This is in contrast to primitive arrays, which could be coming directly from an
      // input and that _is_ the value of the input.
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
  describe('getting individual values', () => {
    test(`can get values at the root`, () => {
      const form = new Form<{ bool: boolean }>({});

      form.registerField('bool', new Field({ initialValue: false, valueTypeName: 'boolean' }));

      expect(form.getValue('bool')).toBe(false);
    });
    test(`can get primitives arrays at the root`, () => {
      const form = new Form<{ strs: string[] }>({});

      form.registerField('strs', new Field({ initialValue: ['test', 'test2'], valueTypeName: 'string[]' }));

      expect(form.getValue('strs')).toEqual(['test', 'test2']);
    });
    test(`can get object array value`, () => {
      const form = new Form<{ objs: { beep: boolean }[] }>({});

      form.registerField('objs.0.beep', new Field({ initialValue: true, valueTypeName: 'boolean' }));

      expect(form.getValue('objs.0.beep')).toEqual(true);
    });
    test(`can get nested values`, () => {
      const form = new Form<{ objs: { beep: boolean } }>({});

      form.registerField('objs.beep', new Field({ initialValue: true, valueTypeName: 'boolean' }));

      expect(form.getValue('objs.beep')).toEqual(true);
    });
    test(`can get nested primitive arrays`, () => {
      const form = new Form<{ objs: { beeps: boolean[] } }>({});

      form.registerField('objs.beeps', new Field({ initialValue: [true, false], valueTypeName: 'boolean[]' }));

      expect(form.getValue('objs.beeps')).toEqual([true, false]);
    });
    test(`can get nested object array value`, () => {
      const form = new Form<{ objs: { objs: { beep: number }[] } }>();

      form.registerField('objs.objs.0.beep', new Field({ initialValue: 100, valueTypeName: 'number' }));

      expect(form.getValue('objs.objs.0.beep')).toEqual(100);
    });
    test(`values may be undefined`, () => {
      const form = new Form<{ num: number}>();

      form.registerField('num', new Field({ valueTypeName: 'number' }));

      expect(form.getValue('num')).toBeUndefined();
    });
  });
  describe('setting values', () => {
    test(`can get values at the root`, () => {
      const form = new Form<{ bool: boolean }>({});

      form.registerField('bool', new Field({ initialValue: false, valueTypeName: 'boolean' }));

      form.setValue('bool', true);

      expect(form.getValue('bool')).toBe(true);
    });
    test(`can get primitives arrays at the root`, () => {
      const form = new Form<{ strs: string[] }>({});

      form.registerField('strs', new Field({ initialValue: ['test', 'test2'], valueTypeName: 'string[]' }));

      form.setValue('strs', ['1']);

      expect(form.getValue('strs')).toEqual(['1']);
    });
    test(`can get object array value`, () => {
      const form = new Form<{ objs: { beep: boolean }[] }>({});

      form.registerField('objs.0.beep', new Field({ initialValue: true, valueTypeName: 'boolean' }));

      form.setValue('objs.0.beep', false);

      expect(form.getValue('objs.0.beep')).toEqual(false);
    });
    test(`can get nested values`, () => {
      const form = new Form<{ objs: { beep: boolean } }>({});

      form.registerField('objs.beep', new Field({ initialValue: true, valueTypeName: 'boolean' }));

      form.setValue('objs.beep', false);

      expect(form.getValue('objs.beep')).toEqual(false);
    });
    test(`can get nested primitive arrays`, () => {
      const form = new Form<{ objs: { beeps: boolean[] } }>({});

      form.registerField('objs.beeps', new Field({ initialValue: [true, false], valueTypeName: 'boolean[]' }));

      form.setValue('objs.beeps', [false]);

      expect(form.getValue('objs.beeps')).toEqual([false]);
    });
    test(`can get nested object array value`, () => {
      const form = new Form<{ objs: { objs: { beep: number }[] } }>({});

      form.registerField('objs.objs.0.beep', new Field({ initialValue: 100, valueTypeName: 'number' }));

      form.setValue('objs.objs.0.beep', 200);

      expect(form.getValue('objs.objs.0.beep')).toEqual(200);
    });
  });
  describe('initialization', () => {
    test(`all fields revert to their initial values`, () => {
      const form = new Form<{
        num: number;
        str: string;
        bool: boolean;
        nested: {
          num1: number;
          str1: string;
          bool: boolean;
        };
      }>();

      form.registerField('num', new Field({ initialValue: 10, valueTypeName: 'number' }));
      form.registerField('str', new Field({ initialValue: 'something', valueTypeName: 'string' }));
      form.registerField('bool', new Field({ initialValue: true, valueTypeName: 'boolean' }));

      form.registerField('nested.num1', new Field({ initialValue: 100, valueTypeName: 'number' }));
      form.registerField('nested.str1', new Field({ initialValue: 'else', valueTypeName: 'string' }));
      form.registerField('nested.bool', new Field({ initialValue: false, valueTypeName: 'boolean' }));

      form.setValue('num', 100);
      form.setValue('nested.bool', true);

      form.initialize();

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
  });
  describe('validation', () => {
    test(`form validation is performed`, async () => {
      const form = new Form<{ num: number }>({ validators: [() => 'test'] });

      form.registerField('num', new Field({ initialValue: 10, valueTypeName: 'number' }));

      const result = await form.validate();

      expect(result).toEqual({
        form: ['test'],
        fields: new Map([['num', []]]),
      });
    });
    test(`field validation is performed`, async () => {
      const form = new Form<{ num: number }>({ validators: [() => 'test'] });

      form.registerField('num', new Field({ initialValue: 10, valueTypeName: 'number', validators: [() => 'field'] }));

      const result = await form.validate();

      expect(result).toEqual({
        form: ['test'],
        fields: new Map([['num', ['field']]]),
      });
    });
    test(`validation results are available in metadata`, async () => {
      const form = new Form<{ num: number }>({ validators: [() => 'test'] });

      form.registerField('num', new Field({ initialValue: 10, valueTypeName: 'number', validators: [() => 'field'] }));

      const result = await form.validate();

      expect(form.metadata.validationResult).toEqual(result);
    });
    test(`metadata is updated on subsequent runs`, async () => {
      const form = new Form<{ num: number }>({
        validators: [(values) => (values.num === 10 ? 'test' : '')],
      });

      form.registerField(
        'num',
        new Field({
          initialValue: 10,
          valueTypeName: 'number',
          validators: [({ value }) => (value === 10 ? 'field' : '')],
        })
      );

      const result = await form.validate();

      expect(form.metadata.validationResult).toEqual(result);

      form.setValue('num', 100);

      await form.validate();

      expect(form.metadata.validationResult).toEqual({
        form: [],
        fields: new Map([['num', []]]),
      });
    });
  });
  describe('submission', () => {
    test(`submission handler is not called if form has validation errors`, async () => {
      const form = new Form<{ num: number }>({ validators: [() => 'test'] });

      form.registerField('num', new Field({ initialValue: 10, valueTypeName: 'number' }));

      await form.requestSubmit(handleSubmit);

      expect(handleSubmit).not.toHaveBeenCalled();
    });
    test(`submission handler is not called if fields have validation errors`, async () => {
      const form = new Form<{ num: number }>();

      form.registerField('num', new Field({ initialValue: 10, valueTypeName: 'number', validators: [() => 'test'] }));

      await form.requestSubmit(handleSubmit);

      expect(handleSubmit).not.toHaveBeenCalled();
    });
    test(`submission handler is called if there are no errors`, async () => {
      const form = new Form<{ num: number }>({ validators: [() => ''] });

      form.registerField(
        'num',
        new Field({ initialValue: 10, valueTypeName: 'number', validators: [() => undefined] })
      );

      await form.requestSubmit(handleSubmit);

      expect(handleSubmit).toHaveBeenCalledOnce();
      expect(handleSubmit).toHaveBeenLastCalledWith({ num: 10 });
    });
    test(`throws custom error if there's an error during submit handler`, async () => {
      const failHandleSubmit = () => {
        throw 123;
      };

      const form = new Form<{ num: number }>();

      form.registerField('num', new Field({ initialValue: 10, valueTypeName: 'number' }));

      await expect(async () => await form.requestSubmit(failHandleSubmit)).rejects.toThrow(Error);
    });
  });
});
