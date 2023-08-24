import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import {
  MultilineTextInput,
  MultilineTextInputProps,
} from '../MultilineTextInput';

let value = '';
const onChangeText = jest.fn((text: string) => {
  value = text;
});

const renderMultilineTextInput = (
  props: Partial<MultilineTextInputProps> = {}
) => {
  const defaultProps: MultilineTextInputProps = {
    onChangeText,
  };

  return render(<MultilineTextInput {...defaultProps} {...props} />);
};

describe('MultilineTextInput', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  describe('controlled', () => {
    test('allows newline characters', () => {
      renderMultilineTextInput({
        value,
      });

      const text = 'stuff\n and things\n yeah';

      fireEvent.change(screen.getByTestId('multiline-text-input'), {
        target: {
          value: text,
        },
      });

      expect(value).toBe(text);
    });
  });

  describe('uncontrolled', () => {
    test('allows newline characters', () => {
      renderMultilineTextInput();

      const text = 'stuff\n and things\n yeah';

      fireEvent.change(screen.getByTestId('multiline-text-input'), {
        target: {
          value: text,
        },
      });

      expect(value).toBe(text);
    });
  });
});
