import RadioGroup, { RadioGroupProps } from '../RadioGroup';
import { render, cleanup, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

let defaultOptions: string[] = ['Radio 1', 'Radio 2', 'Radio 3'];

let selectedOption = '';
let onChange = jest.fn(
  (option: string, event: React.ChangeEvent<HTMLInputElement>) => {
    selectedOption = option;
  }
);

const renderRadioGroup = (props: Partial<RadioGroupProps> = {}) => {
  const defaultProps: RadioGroupProps = {
    options: defaultOptions,
    onChange,
    name: 'test-group',
    selectedOption,
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
      expect(screen.getByText(option)).toBeDefined();
    });
  });

  it('the selection should update upon user interaction', () => {
    renderRadioGroup();

    userEvent.click(screen.getByLabelText('Radio 2'));

    expect(onChange).toHaveBeenCalledWith(
      'Radio 2',
      // Don't care about the value of the event.
      onChange.mock.calls[0][1]
    );
    expect(selectedOption).toBe('Radio 2');
  });

  it('should check the appropriate radio when given a default value', () => {
    renderRadioGroup({
      selectedOption: 'Radio 3',
    });

    defaultOptions.forEach((option) => {
      const radio = screen.getByLabelText(option) as HTMLInputElement;

      expect(radio.checked).toBe(option === 'Radio 3' ? true : false);
    });
  });

  it('no radio should be selected when the default value does not correspond to an option', () => {
    renderRadioGroup({
      selectedOption: 'jfkdjakf',
    });

    defaultOptions.forEach((option) => {
      const radio = screen.getByLabelText(option) as HTMLInputElement;

      expect(radio.checked).toBe(false);
    });
  });
});
