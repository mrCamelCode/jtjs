import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox, CheckboxProps } from '../Checkbox';

let value = false;
let onChangeChecked = jest.fn((checked: boolean) => (value = checked));

const renderCheckbox = (props: Partial<CheckboxProps> = {}) => {
  const defaultProps: CheckboxProps = {
    checked: value,
    onChangeChecked,
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

    expect(onChangeChecked).not.toHaveBeenCalled();

    userEvent.click(screen.getByTestId('checkbox'));

    expect(onChangeChecked).toHaveBeenCalledTimes(1);
    expect(value).toBe(true);
  });
});
