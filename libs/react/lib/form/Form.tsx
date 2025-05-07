import { Form as FormDriver } from '@jtjs/form';
import { ComponentPropsWithRef } from 'react';
import { SubmitHandler } from '../../../form/dist/types/model';

export interface FormProps<TFormValues extends object>
  extends Omit<ComponentPropsWithRef<'form'>, 'onSubmit' | 'method' | 'action'> {
  form: FormDriver<TFormValues>;
  onSubmit: SubmitHandler<TFormValues>;
}

export const Form = <TFormValues extends object>({ form, onSubmit, ...otherProps }: FormProps<TFormValues>) => {
  const handleSubmit: ComponentPropsWithRef<'form'>['onSubmit'] = async (event) => {
    event.preventDefault();

    const validationErrors = await form.requestSubmit(onSubmit);

    if (validationErrors) {
      // JT TODO: Scroll to first error?
    } 
  };

  return <form onSubmit={handleSubmit} {...otherProps} />;
};
