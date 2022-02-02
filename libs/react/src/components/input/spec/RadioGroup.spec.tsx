import RadioGroup, { RadioGroupProps } from '../RadioGroup';
import { render, cleanup, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

let defaultOptions: { label: string; value: string }[] = [
  {
    label: 'Radio 1',
    value: '1',
  },
  {
    label: 'Radio 2',
    value: '2',
  },
  {
    label: 'Radio 3',
    value: '3',
  },
];

let value = '';
let onChange = jest.fn(
  (optionValue: string, event: React.ChangeEvent<HTMLInputElement>) => {
    value = optionValue;
  }
);

const renderRadioGroup = (props: Partial<RadioGroupProps> = {}) => {
  const defaultProps: RadioGroupProps = {
    options: defaultOptions,
    onChange,
    name: 'test-group',
    value,
  };

  return render(<RadioGroup {...defaultProps} {...props} />);
};

describe('RadioGroup', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('should display the options given to it', () => {
    renderRadioGroup();

    defaultOptions.forEach((option) => {
      expect(screen.getByText(option.label)).toBeDefined();
    });
  });

  it('the selection should update upon user interaction', () => {
    renderRadioGroup();

    userEvent.click(screen.getByLabelText('Radio 2'));

    expect(onChange).toHaveBeenCalledWith(
      '2',
      // Don't care about the value of the event.
      onChange.mock.calls[0][1]
    );
    expect(value).toBe('2');
  });

  it('should check the appropriate radio when given a default value', () => {
    renderRadioGroup({
      value: '3',
    });

    defaultOptions.forEach((option) => {
      const radio = screen.getByLabelText(option.label) as HTMLInputElement;

      expect(radio.checked).toBe(option.value === '3' ? true : false);
    });
  });

  it('no radio should be selected when the default value does not correspond to an option', () => {
    renderRadioGroup({
      value: 'jfkdjakf',
    });

    defaultOptions.forEach((option) => {
      const radio = screen.getByLabelText(option.label) as HTMLInputElement;

      expect(radio.checked).toBe(false);
    });
  });
});
