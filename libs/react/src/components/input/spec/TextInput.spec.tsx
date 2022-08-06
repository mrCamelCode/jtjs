import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import TextInput, { TextInputProps } from '../TextInput';

let value = '';
let rawValue = '';
const onChangeText = jest.fn((maskedText: string, rawText: string) => {
  value = maskedText;
  rawValue = rawText;
});

const renderTextInput = (props: Partial<TextInputProps> = {}) => {
  const defaultProps: TextInputProps = {
    value,
    onChangeText,
  };

  return render(<TextInput {...defaultProps} {...props} />);
};

describe('TextInput', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  describe('basic functionality', () => {
    it('user interaction updates the value of the input', () => {
      renderTextInput();

      fireEvent.change(screen.getByTestId('text-input'), {
        target: {
          value: 'stuff',
        },
      });

      expect(value).toBe('stuff');
      expect(rawValue).toBe('stuff');
    });
  });

  describe('multiline', () => {
    it('it does not allow newline characters in the input when multiline is disabled', () => {
      renderTextInput({
        multiline: false,
      });

      const text = 'stuff\n and things\n yeah';

      fireEvent.change(screen.getByTestId('text-input'), {
        target: {
          value: text,
        },
      });

      expect(value).toBe('stuff and things yeah');
      expect(rawValue).toBe(text);
    });
    it('it DOES allow newline characters in the input when multiline is enabled', () => {
      renderTextInput({
        multiline: true,
      });

      const text = 'stuff\n and things\n yeah';

      fireEvent.change(screen.getByTestId('text-input'), {
        target: {
          value: text,
        },
      });

      expect(value).toBe(text);
      expect(rawValue).toBe(text);
    });
  });

  describe('masking', () => {
    it('will apply a mask', () => {
      renderTextInput({
        mask: /\d/,
      });

      fireEvent.change(screen.getByTestId('text-input'), {
        target: {
          value: 'abc123d678',
        },
      });

      expect(value).toBe('123678');
      expect(rawValue).toBe('abc123d678');
    });
  });
});
