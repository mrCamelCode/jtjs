import Checkbox, { CheckboxProps } from '../Checkbox';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

let value = false;
let onChange = jest.fn((checked: boolean) => (value = checked));

const renderCheckbox = (props: Partial<CheckboxProps> = {}) => {
  const defaultProps: CheckboxProps = {
    checked: value,
    onChange,
    children: 'Check Me!',
  };

  return render(<Checkbox {...defaultProps} {...props} />);
};

describe('Checkbox', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('checked value updates correctly on interaction', () => {
    renderCheckbox();

    expect(onChange).not.toHaveBeenCalled();

    userEvent.click(screen.getByTestId('checkbox'));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(value).toBe(true);
  });
});
