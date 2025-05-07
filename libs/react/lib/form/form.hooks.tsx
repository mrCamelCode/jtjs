import { DeepPartial, FieldValue, Form as FormDriver, FormOptions } from '@jtjs/form';
import { useMemo } from 'react';
import { Field, FieldProps } from './Field';
import { Form } from './Form';

export interface UseFormOptions<TFormValues extends object> {
  formOptions?: FormOptions<TFormValues>;
  initialValues?: DeepPartial<TFormValues>;
}

/**
 * Use a form driven by @jtjs/form.
 */
/*
 * JT TODO NOTE: The hook can receive initial values in the shape of the form
 * data object WITHOUT requiring me to register all the fields up front or
 * try to figure out all the field paths from the initial values data. Instead,
 * I have the initial values stored in the args. I'm going to give them a wrapped
 * version of the Field component (to make it align with the provided form values
 * shape). When they use the Field component, they have to provide the pull path
 * to the field as they want to use it. So, all I have to do, is in my wrapper
 * for the base Field component, I use the path (name) they provide to drill into
 * the initial values object. If the path produces a value from that drilling,
 * it's given to the @jtjs/form Field instance as the initial value.
 */
export function useForm<TFormValues extends object>({ formOptions, initialValues }: UseFormOptions<TFormValues> = {}) {
  const form = useMemo(() => {
    return new FormDriver<TFormValues>(formOptions);
  }, []);

  const FieldComponent = useMemo(() => {
    return <TFieldValue extends FieldValue>({
      name,
      ...otherProps
    }: Pick<FieldProps<TFormValues, TFieldValue>, 'children' | 'name' | 'valueTypeName' | 'validators'>) => {
      return <Field name={name} form={form} initialValue={drillToProperty(initialValues, name)} {...otherProps} />;
    };
  }, []);

  return {
    Form: Form<TFormValues>,
    Field: FieldComponent,
  };
}

function drillToProperty(obj: Record<string, any> | undefined, path: string): any {
  throw new Error('TODO');
}
