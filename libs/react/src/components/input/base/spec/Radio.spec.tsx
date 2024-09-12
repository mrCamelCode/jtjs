import { Radio, RadioProps } from '../Radio';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

let value = false;
let onChangeChecked = jest.fn((checked: boolean, event) => (value = checked));

const renderRadio = (props: Partial<RadioProps> = {}) => {
  const defaultProps: RadioProps = {
    checked: value,
    onChangeChecked,
    name: 'test-radio',
  };

  return render(<Radio {...defaultProps} {...props} />);
};

describe('Radio', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('the value changes after a user interaction', async () => {
    renderRadio();

    expect(onChangeChecked).not.toHaveBeenCalled();

    await userEvent.click(screen.getByTestId('radio'));

    expect(onChangeChecked).toHaveBeenCalledTimes(1);
    expect(value).toBe(true);
  });
});
