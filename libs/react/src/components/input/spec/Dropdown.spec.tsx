import Dropdown, { DropdownProps } from '../Dropdown';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

let value = '1';
const onChange = jest.fn((option: string) => (value = option));

const defaultOptions = [
  {
    label: 'Option 1',
    value: '1',
  },
  {
    label: 'Option 2',
    value: '2',
  },
];

const renderDropdown = (props: Partial<DropdownProps> = {}) => {
  const defaultProps: DropdownProps = {
    options: defaultOptions,
    value,
    onChange,
    children: 'Dropdown',
  };

  return render(<Dropdown {...defaultProps} {...props} />);
};

describe('Dropdown', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('allows you to specify options as a prop', () => {
    renderDropdown();

    expect(screen.getByText('Option 1')).toBeDefined();
    expect(screen.getByText('Option 2')).toBeDefined();
  });

  it('should allow you to change which option is selected', () => {
    renderDropdown({
      value,
      onChange,
    });

    userEvent.selectOptions(screen.getByTestId('dropdown'), 'Option 2');

    expect(onChange).toHaveBeenCalledTimes(1);

    expect(value).toBe('2');
  });

  it('should accurately default to the option that is set as the initial value', () => {
    renderDropdown({
      allowEmpty: true,
      value: '2',
    });

    expect((screen.getByText('Option 1') as HTMLOptionElement).selected).toBe(
      false
    );
    expect((screen.getByText('Option 2') as HTMLOptionElement).selected).toBe(
      true
    );
  });

  it('should NOT include an empty first option when allowEmpty is not set', () => {
    renderDropdown({});

    const select = screen.getByTestId('dropdown') as HTMLSelectElement;

    expect(select.options.length).toBe(2);

    expect(select.options[0].text).toBe('Option 1');
    expect(select.options[1].text).toBe('Option 2');
  });

  it('should include an empty first option when allowEmpty is set to true', () => {
    renderDropdown({
      allowEmpty: true,
    });

    const select = screen.getByTestId('dropdown') as HTMLSelectElement;

    expect(select.options.length).toBe(3);

    expect(select.options[0].text).toBe('');
    expect(select.options[1].text).toBe('Option 1');
    expect(select.options[2].text).toBe('Option 2');
  });

  it('should remove the empty option after selection when allowEmptyAfterSelection is false', async () => {
    value = '';

    const { rerender } = renderDropdown({
      value,
      allowEmpty: true,
      allowEmptyAfterSelection: false,
    });

    const select = screen.getByTestId('dropdown') as HTMLSelectElement;

    expect(select.options.length).toBe(3);

    userEvent.selectOptions(select, 'Option 1');

    rerender(
      <Dropdown
        options={defaultOptions}
        onChange={onChange}
        value={value}
        allowEmpty
        allowEmptyAfterSelection={false}
      >
        Dropdown
      </Dropdown>
    );

    expect(select.options.length).toBe(2);
  });
});
