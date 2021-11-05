import Label, { LabelProps } from '../Label';
import { render, cleanup, screen } from '@testing-library/react';

const renderLabel = (props: Partial<LabelProps> = {}) => {
  const defaultProps: LabelProps = {};

  return render(<Label {...defaultProps} {...props} />);
};

describe('Label', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('the text of the label is visible', () => {
    renderLabel({
      children: 'lab',
    });

    expect(screen.getByText('lab')).toBeDefined();
  });
});
