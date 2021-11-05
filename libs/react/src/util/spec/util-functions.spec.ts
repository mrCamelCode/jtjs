import * as util from '../util-functions';

describe('util-functions', () => {
  describe('formatClassName', () => {
    it('should give back an empty string when no args are given', () => {
      expect(util.formatClassName()).toBe('');
      expect(util.formatClassName('')).toBe('');
      expect(util.formatClassName('', '')).toBe('');
    });

    it('should give back the formatted class when no classNameProp is given.', () => {
      expect(util.formatClassName('c1 c2 c3')).toBe('c1 c2 c3');
      expect(util.formatClassName('  c1 c2 c3 ')).toBe('c1 c2 c3');
    });

    it('should give back the formatted class when both args are given.', () => {
      const expectation = 'c1 c2 c3';

      expect(util.formatClassName('c1 c2', 'c3')).toBe(expectation);
      expect(util.formatClassName('c1', 'c2 c3')).toBe(expectation);
      expect(util.formatClassName('  c1 c2', '     c3       ')).toBe(
        expectation
      );
    });
  });
});
