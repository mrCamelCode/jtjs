import { describe, expect, test } from 'vitest';
import { FormValuePath, FormValueTypeAtPath } from '../pathing';

describe('pathing types test--verify build passes', () => {
  test('dummy', () => expect(true).toBeTruthy());
})

interface Test {
  num: number;
  str: string;
  bool: boolean;
  strs: string[];
  file: File;
  files: File[];
  nested: {
    num1: number;
    str1: string;
    bool: boolean;
    anotherStrs: string[];
    objs: {
      testNest: string;
      nested: {
        beep: number;
      };
      nestedObjArr: {
        boop: boolean;
      }[];
    }[];
  };
}

type A = FormValueTypeAtPath<string[], '0'>;

type Paths = FormValuePath<Test>;

const mineTest: FormValuePath<Test> = 'nested.objs';
const mineTest1: FormValuePath<Test> = 'nested.objs.0.nested.beep';
const mineTest2: FormValuePath<Test> = 'nested.objs.0.testNest';
const mineTest3: FormValuePath<Test> = 'nested.anotherStrs.0';
const mineTest4: FormValuePath<Test> = 'files.0';

type Path = FormValueTypeAtPath<Test, `nested.anotherStrs`>;
type Path2 = FormValueTypeAtPath<Test, 'strs'>;
type Path3 = FormValueTypeAtPath<Test, 'bool'>;
type PathT = FormValueTypeAtPath<Test, 'nested.objs.0'>;
type PathU = FormValueTypeAtPath<Test, 'strs.0'>;
type Path4 = FormValueTypeAtPath<Test, 'nested.objs.0.testNest'>;
type Path5 = FormValueTypeAtPath<Test, 'nested.objs.0.nestedObjArr.0.boop'>;
type Path6 = FormValueTypeAtPath<Test, 'files'>;

type T = { test: string }[];

type U = T[number];

type IsObject<T> = T extends object ? T : never;

type V = IsObject<string>;
