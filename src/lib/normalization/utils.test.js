import { normalizeObjectArrayById } from './utils';

describe('lib/normalization/utils', () => {
  describe('normalizeObjectArrayById(objectArray)', () => {
    it('should return an empty object when given a falsey value', () => {
      const expected = {
        allIds: [],
        objectsById: {}
      };
      expect(normalizeObjectArrayById(null)).toEqual(expected);
      expect(normalizeObjectArrayById(undefined)).toEqual(expected);
      expect(normalizeObjectArrayById(false)).toEqual(expected);
    });
    it('should return an empty object when given an empty array', () => {
      const expected = {
        allIds: [],
        objectsById: {}
      };
      expect(normalizeObjectArrayById([])).toEqual(expected);
    });
    it('should return object byId when given an object array', () => {
      const courses = [
        {
          id: 1,
          a: 'some value'
        },
        {
          id: 2,
          b: 'some value'
        },
        {
          id: 3,
          c: 'some value'
        }
      ];
      const expected = {
        allIds: [1, 2, 3],
        objectsById: {
          1: courses[0],
          2: courses[1],
          3: courses[2]
        }
      };
      const result = normalizeObjectArrayById(courses);
      expect(result).toEqual(expected);
    });
  });
});
