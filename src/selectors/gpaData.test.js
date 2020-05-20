import { GPA_DATA } from '../fixtures/GPAData';
import {
  calculateDistributionIntervalsByCourseId,
  calculateAverageGPAByCourseId
} from './gpaData';

describe('selectors/gpaData', () => {
  describe('/calculateDistributionIntervalsByCourseId', () => {
    it('should return a function that returns null when given an invalid state', () => {
      const props = {
        course_id: 'something'
      };
      const result = calculateDistributionIntervalsByCourseId(null, props);

      expect(result).toEqual(null);
    });

    it('should return null when course_id is not found', () => {
      const props = {
        course_id: 'CS 241'
      };
      const result = calculateDistributionIntervalsByCourseId(GPA_DATA, props);

      expect(result).toEqual(null);
    });
    it('should return distribution intervals', () => {
      const props = {
        course_id: 'AAS 315'
      };
      const result = calculateDistributionIntervalsByCourseId(GPA_DATA, props);

      const expected = {
        middle50Interval: [3.0, 3.67],
        middle75Interval: [2.67, 4.0],
        middle90Interval: [2.67, 4.0]
      };

      expect(result).toEqual(expected);
    });
  });
  describe('/calculateAverageGPAByCourseId', () => {
    it('should return a function that returns null when given an invalid state', () => {
      const props = {
        course_id: 'something'
      };
      const result = calculateAverageGPAByCourseId(null, props);

      expect(result).toEqual(null);
    });

    it('should return null when course_id is not found', () => {
      const props = {
        course_id: 'CS 241'
      };
      const result = calculateAverageGPAByCourseId(GPA_DATA, props);

      expect(result).toEqual(null);
    });

    it('should return the average GPA for a given course_id', () => {
      const props = {
        course_id: 'AAS 315'
      };
      const result = calculateAverageGPAByCourseId(GPA_DATA, props);

      expect(result).toBeCloseTo(3.37);
    });
  });
});
