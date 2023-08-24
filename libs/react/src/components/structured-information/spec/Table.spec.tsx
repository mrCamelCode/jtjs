import { cleanup, render, screen } from '@testing-library/react';
import { Table, TableProps } from '../Table';

const renderTable = (props: Partial<TableProps> = {}) => {
  const defaultProps: TableProps = {
    columnHeaders: ['Column 1', 'Column 2', 'Column 3'],
  };

  return render(<Table {...defaultProps} {...props} />);
};

describe('Table', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('headers show', () => {
    renderTable();

    ['Column 1', 'Column 2', 'Column 3'].forEach((header) => {
      expect(screen.queryByText(header)).not.toBeNull();
    });
  });

  test('rows of plain text show up', () => {
    const cellTexts = ['text', 'other text', 'some more text'];

    renderTable({
      rows: [
        {
          cells: cellTexts,
        },
      ],
    });

    cellTexts.forEach((cellText) => {
      expect(screen.queryByText(cellText)).not.toBeNull();
    });
  });

  test('cells can contain JSX', () => {
    renderTable({
      rows: [
        {
          cells: ['jfkdaf', <span>This is a test</span>, 'jfkdajfa'],
        },
      ],
    });

    expect(screen.queryByText('This is a test')).not.toBeNull();
  });

  test('table uses children if provided', () => {
    renderTable({
      children: (
        <>
          <tr>
            <td>Custom one</td>
            <td></td>
            <td></td>
          </tr>
        </>
      ),
    });

    expect(screen.queryByText('Custom one')).not.toBeNull();
  });

  describe('empty tag', () => {
    test('shows when table is empty', () => {
      renderTable();

      expect(screen.queryByText('No data available')).not.toBeNull();
    });

    test("doesn't show when disabled", () => {
      renderTable({
        disableEmptyTag: true,
      });

      expect(screen.queryByText('No data available')).toBeNull();
    });

    test('uses custom text', () => {
      renderTable({
        emptyTagText: 'Nothin here, man!',
      });

      expect(screen.queryByText('No data available')).toBeNull();
      expect(screen.queryByText('Nothin here, man!')).not.toBeNull();
    });
  });
});
