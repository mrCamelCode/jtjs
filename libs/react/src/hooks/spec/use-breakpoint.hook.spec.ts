import {
  isBreakpointBiggerThan,
  isBreakpointSmallerThan,
  isBreakpointWithin,
  useBreakpoint,
} from '../use-breakpoint.hook';

let mockGetWindowWidth = jest.fn();
jest.mock('../use-window-dimensions.hook', () => {
  const originalModule = jest.requireActual('../use-window-dimensions.hook');

  return {
    __esModule: true,
    ...originalModule,
    useWindowDimensions: jest.fn(() => ({
      height: 0,
      width: mockGetWindowWidth(),
    })),
  };
});

describe('use-breakpoint.hook', () => {
  describe('useBreakpoint', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('will return the correct breakpoint for the xl breakpoint', () => {
      mockGetWindowWidth.mockReturnValueOnce(1920);

      expect(useBreakpoint()).toBe('xl');
    });
    it('will return the correct breakpoint for the xs breakpoint', () => {
      mockGetWindowWidth.mockReturnValueOnce(480);

      expect(useBreakpoint()).toBe('xs');
    });
    it('will return the correct breakpoint for the md breakpoint', () => {
      mockGetWindowWidth.mockReturnValueOnce(800);

      expect(useBreakpoint()).toBe('md');
    });
    it('will return the correct breakpoint when the width is on a breakpoint', () => {
      mockGetWindowWidth.mockReturnValueOnce(992);

      expect(useBreakpoint()).toBe('lg');
    });
    it('will return the correct breakpoint when the width is one less than a breakpoint', () => {
      mockGetWindowWidth.mockReturnValueOnce(767);

      expect(useBreakpoint()).toBe('sm');
    });
    it('will return the correct breakpoint when the width is one greater than a breakpoint', () => {
      mockGetWindowWidth.mockReturnValueOnce(769);

      expect(useBreakpoint()).toBe('md');
    });
  });
  describe('isBreakpointSmallerThan', () => {
    it('should be correct when the base breakpoint is smaller', () => {
      expect(isBreakpointSmallerThan('xs', 'md')).toBe(true);
    });
    it('should be correct when the base breakpoint is bigger', () => {
      expect(isBreakpointSmallerThan('xl', 'sm')).toBe(false);
    });
    it('should be correct when the breakpoints match', () => {
      expect(isBreakpointSmallerThan('sm', 'sm')).toBe(false);
    });
  });
  describe('isBreakpointBiggerThan', () => {
    it('should be correct when the base breakpoint is smaller', () => {
      expect(isBreakpointBiggerThan('xs', 'md')).toBe(false);
    });
    it('should be correct when the base breakpoint is bigger', () => {
      expect(isBreakpointBiggerThan('xl', 'sm')).toBe(true);
    });
    it('should be correct when the breakpoints match', () => {
      expect(isBreakpointBiggerThan('sm', 'sm')).toBe(false);
    });
  });
  describe('isBreakpointWithin', () => {
    it('should be correct when the base breakpoint is smaller', () => {
      expect(isBreakpointWithin('xs', 'md')).toBe(false);
    });
    it('should be correct when the base breakpoint is bigger', () => {
      expect(isBreakpointWithin('xl', 'sm')).toBe(false);
    });
    it('should be correct when the breakpoints match', () => {
      expect(isBreakpointWithin('sm', 'sm')).toBe(true);
    });
  });
});
