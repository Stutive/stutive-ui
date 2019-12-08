import { getObjectByIdFromObjectArray } from './utils';

describe('lib/normalization/utils', () => {
  describe('getObjectByIdFromObjectArray(objectArray)', () => {
    it('should return an empty object when given a falsey value', () => {
      expect(getObjectByIdFromObjectArray(null)).toEqual({});
      expect(getObjectByIdFromObjectArray(undefined)).toEqual({});
      expect(getObjectByIdFromObjectArray(false)).toEqual({});
    });
    it('should return an empty object when given an empty array', () => {
      expect(getObjectByIdFromObjectArray([])).toEqual({});
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
        1: courses[0],
        2: courses[1],
        3: courses[2]
      };
      const result = getObjectByIdFromObjectArray(courses);
      expect(result).toEqual(expected);
    });
  });
});
