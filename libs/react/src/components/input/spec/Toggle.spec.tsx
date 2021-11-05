import Toggle, { ToggleProps } from '../Toggle';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

let isOn = false;
const onChange = jest.fn((newIsOn: boolean, event) => (isOn = newIsOn));

const renderToggle = (props: Partial<ToggleProps> = {}) => {
  const defaultProps: ToggleProps = {
    isOn,
    onChange,
  };

  return render(<Toggle {...defaultProps} {...props} />);
};

describe('Toggle', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('the value should update with user interaction, both by mouse and keyboard', () => {
    const { rerender } = renderToggle();

    expect(onChange).not.toHaveBeenCalled();
    expect(isOn).toBe(false);

    const toggle = screen.getByTestId('toggle');

    userEvent.click(toggle);

    expect(onChange).toHaveBeenLastCalledWith(true, onChange.mock.calls[0][1]);
    expect(isOn).toBe(true);

    rerender(<Toggle isOn={isOn} onChange={onChange} />);

    fireEvent.focus(toggle);
    userEvent.keyboard(' ');

    expect(onChange).toHaveBeenLastCalledWith(false, onChange.mock.calls[1][1]);
    expect(isOn).toBe(false);
  });

  it('blocks user interaction when disabled', () => {
    const { rerender } = renderToggle({ disabled: true });

    expect(onChange).not.toHaveBeenCalled();
    expect(isOn).toBe(false);

    const toggle = screen.getByTestId('toggle');

    userEvent.click(toggle);

    expect(onChange).not.toHaveBeenCalled();
    expect(isOn).toBe(false);

    rerender(<Toggle isOn={isOn} onChange={onChange} disabled />);

    fireEvent.focus(toggle);
    userEvent.keyboard(' ');

    expect(onChange).not.toHaveBeenCalled();
    expect(isOn).toBe(false);
  });
});
