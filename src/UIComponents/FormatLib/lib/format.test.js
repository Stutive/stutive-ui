import { formatCreditHours } from './format';

describe('format', () => {
  describe('formatCreditHours', () => {
    it('should handle the empty case', () => {
      expect(formatCreditHours([])).toBe('');
      expect(formatCreditHours(null)).toBe('');
      expect(formatCreditHours('random shit')).toBe('');
    });
    it('should handle the zero hour case', () => {
      expect(formatCreditHours([0])).toBe('0 hours');
    });
    it('should handle singular hours case', () => {
      expect(formatCreditHours([1])).toBe('1 hour');
    });
    it('should handle two possible hours', () => {
      expect(formatCreditHours([0, 1])).toBe('0 or 1 hours');
      expect(formatCreditHours([1, 2])).toBe('1 or 2 hours');
      expect(formatCreditHours([2, 3])).toBe('2 or 3 hours');
    });
    it('should handle any number of possible hours', () => {
      expect(formatCreditHours([0, 1, 2])).toBe('0, 1 or 2 hours');
      expect(formatCreditHours([0, 1, 2, 3])).toBe('0, 1, 2 or 3 hours');
    });
    it('should order hours in increasing order', () => {
      expect(formatCreditHours([5, 4, 3, 2, 1])).toBe('1, 2, 3, 4 or 5 hours');
    });
  });
});
