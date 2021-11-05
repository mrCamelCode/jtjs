import Radio, { RadioProps } from '../Radio';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

let value = false;
let onChange = jest.fn((checked: boolean, event) => (value = checked));

const renderRadio = (props: Partial<RadioProps> = {}) => {
  const defaultProps: RadioProps = {
    checked: value,
    onChange,
    name: 'test-radio',
    children: 'Label',
  };

  return render(<Radio {...defaultProps} {...props} />);
};

describe('Radio', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('the value changes after a user interaction', () => {
    renderRadio();

    expect(onChange).not.toHaveBeenCalled();

    userEvent.click(screen.getByTestId('radio'));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(value).toBe(true);
  });
});
