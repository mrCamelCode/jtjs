import { Field as FieldDriver, FieldOptions, Form } from '@jtjs/form';
import { ChangeEvent, ReactNode, RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { FieldValue } from '../../../form/dist/types/model';
import { FormValuePath } from '../../../form/dist/types/types/pathing';

type HtmlInput = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

interface UncontrolledFieldProps {
  onChange?: (event: ChangeEvent<HtmlInput>) => void;
  name?: string;
  value?: string | string[] | File | File[] | null;
  checked?: boolean;
  ref?: RefObject<HtmlInput | undefined>
}

type HtmlInputValues = string | string[] | File | File[] | boolean | null;

export interface FieldProps<TFormValues extends object, TFieldValue extends FieldValue>
  extends FieldOptions<TFieldValue> {
  name: FormValuePath<TFormValues>;
  children: (field: FieldDriver<TFieldValue>, props: UncontrolledFieldProps) => ReactNode;
  form: Form<TFormValues>;
}

export const Field = <TFormValues extends object, TFieldValue extends FieldValue>({
  initialValue,
  valueTypeName,
  validators,
  children,
  name,
  form,
}: FieldProps<TFormValues, TFieldValue>) => {
  const inputRef = useRef<HtmlInput>(undefined);
  
  const [rawInputValue, setRawInputValue] = useState<HtmlInputValues>(getRawInputDefault(valueTypeName, initialValue));

  const field: FieldDriver<TFieldValue> = useMemo(() => {
    return new FieldDriver({ initialValue, valueTypeName, validators });
  }, []);

  useEffect(() => {
    // @ts-ignore: Fix later.
    form.registerField(name, field);
  }, []);

  const fieldProps: UncontrolledFieldProps = useMemo(() => {
    const handleChange: UncontrolledFieldProps['onChange'] = useMemo(
      () => (event) => {
        setRawInputValue(event.target.value);
      },
      []
    );

    return {
      onChange: handleChange,
      value:
        isFieldValueValidHtmlInputArray(valueTypeName) || isFieldValueHtmlStringInput(valueTypeName)
          ? (rawInputValue as Exclude<HtmlInputValues, boolean>)
          : undefined,
      checked: isFieldValueCheckboxOrRadio(valueTypeName) ? (rawInputValue as boolean) : undefined,
      ref: inputRef,
    };
  }, [rawInputValue]);

  return <>{children(field, fieldProps)}</>;
};

function getRawInputDefault<TFormValues extends object, TFieldValue extends FieldValue>(
  valueTypeName: FieldProps<TFormValues, TFieldValue>['valueTypeName'],
  initialValue: FieldProps<TFormValues, TFieldValue>['initialValue']
): HtmlInputValues {
  if (
    initialValue !== undefined &&
    // Only allow values that would be accepted by an HTML input since the raw input will only
    // be used if THIS component is controlling the input. If the consumer wants to use a non-standard
    // value type (one not available with standard HTML tags), then they must control the component
    // anyway, in which case they would be controlling and setting the value.
    (typeof initialValue === 'string' ||
      typeof initialValue === 'boolean' ||
      isStringArray(initialValue) ||
      initialValue instanceof File)
  ) {
    return initialValue;
  }

  switch (valueTypeName) {
    case 'string[]':
    case 'File[]':
      return [];
    case 'File':
      return null;
    case 'boolean':
      return false;
  }

  return '';
}

function isFieldValueHtmlStringInput<TFormValues extends object, TFieldValue extends FieldValue>(
  valueTypeName: FieldProps<TFormValues, TFieldValue>['valueTypeName']
): boolean {
  return valueTypeName === 'string';
}

function isFieldValueValidHtmlInputArray<TFormValues extends object, TFieldValue extends FieldValue>(
  valueTypeName: FieldProps<TFormValues, TFieldValue>['valueTypeName']
): boolean {
  return valueTypeName === 'string[]' || valueTypeName === 'File[]';
}

function isFieldValueCheckboxOrRadio<TFormValues extends object, TFieldValue extends FieldValue>(
  valueTypeName: FieldProps<TFormValues, TFieldValue>['valueTypeName']
): boolean {
  return valueTypeName === 'boolean';
}

function isStringArray(val: any): val is string[] {
  return Array.isArray(val) && (val.length === 0 || typeof val[0] === 'string');
}
