import LoadView, { LoadViewProps } from '../LoadView';
import { render, cleanup, screen } from '@testing-library/react';

const renderLoadView = (props: Partial<LoadViewProps> = {}) => {
  const defaultProps: LoadViewProps = {
    children: [],
    isLoading: true,
  };

  return render(<LoadView {...defaultProps} {...props} />);
};

describe('LoadView', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("doesn't show the content when it's loading", () => {
    renderLoadView({
      children: <p>Hello world!</p>,
    });

    expect(() => screen.getByText('Hello World!')).toThrow();
  });

  it("shows the content when it's not loading", () => {
    renderLoadView({
      isLoading: false,
      children: <p>Hello world!</p>,
    });

    expect(screen.getByText('Hello world!')).toBeDefined();
  });

  it('properly uses the provided loadingComponent', () => {
    renderLoadView({
      isLoading: true,
      loadingComponent: <p>Loading...</p>,
    });

    expect(screen.getByText('Loading...')).toBeDefined();
  });
});
