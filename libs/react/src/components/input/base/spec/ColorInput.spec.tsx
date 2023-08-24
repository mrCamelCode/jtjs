import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { ColorInput, ColorInputProps } from '../ColorInput';

let value = '';
const onChangeColor = jest.fn((col: string) => (value = col));

const renderColorInput = (props: Partial<ColorInputProps> = {}) => {
  const defaultProps: ColorInputProps = {
    onChangeColor,
  };

  return render(<ColorInput {...defaultProps} {...props} />);
};

describe('ColorInput', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  describe('controlled', () => {
    test('interaction changes the color', () => {
      renderColorInput({
        value,
      });

      const input = screen.getByTestId('color-input');

      fireEvent.change(input, {
        target: {
          value: '#ee1133',
        },
      });

      expect(value).toBe('#ee1133');
    });
  });

  describe('uncontrolled', () => {
    test('interaction changes the color', () => {
      renderColorInput();

      const input = screen.getByTestId('color-input');

      fireEvent.change(input, {
        target: {
          value: '#ee1133',
        },
      });

      expect(value).toBe('#ee1133');
    });
  });
});
