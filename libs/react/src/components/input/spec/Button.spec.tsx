import Button, { ButtonProps } from '../Button';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const renderButton = (props: Partial<ButtonProps> = {}) => {
  const defaultProps: ButtonProps = {};

  return render(<Button {...defaultProps} {...props} />);
};

describe('Button', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('invokes the click handler when clicked and shows up properly', () => {
    const onClick = jest.fn();

    renderButton({
      children: 'Click Me',
      onClick,
    });

    expect(onClick).not.toHaveBeenCalled();

    userEvent.click(screen.getByText('Click Me'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
