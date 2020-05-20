import {
  ORDER_ASC,
  GRADE_POINTS,
  MIDDLE_50_BOUNDS,
  MIDDLE_75_BOUNDS,
  MIDDLE_90_BOUNDS
} from '../constants/GPA';

export function getById(state) {
  return state.getIn(['gpaData', 'byId']);
}

//  Helper for `calculateDistributionIntervalsByCourseId`
function _getCorrespondingInterval(gpaData, lowerBound, upperBound) {
  let sum = 0;
  let i = 0;
  let currGrade = null;

  while (sum < lowerBound && i < ORDER_ASC.length) {
    currGrade = ORDER_ASC[i];
    sum += gpaData[currGrade];
    i += 1;
  }
  const lower = GRADE_POINTS[currGrade];

  while (sum < upperBound && i < ORDER_ASC.length) {
    currGrade = ORDER_ASC[i];
    sum += gpaData[currGrade];
    i += 1;
  }
  const upper = GRADE_POINTS[currGrade];

  return [lower, upper];
}

/**
 *  Calulates the intervals representing the middle 50, 75, and 90th percentile given
 *  the percent of students getting each grade
 *
 *  @param {Map} state | the redux state
 *  @param {Object} props | the props of the CoursePreviewCard component
 *    requires course_id prop
 *
 */
export function calculateDistributionIntervalsByCourseId(state, props) {
  if (!state || !props) {
    return null;
  }

  const { course_id } = props;

  const byId = getById(state);
  const courseGPAData = byId.get(course_id);
  if (!courseGPAData) {
    return null;
  }
  const gpaData = courseGPAData.toJS();

  return {
    middle50Interval: _getCorrespondingInterval(
      gpaData,
      MIDDLE_50_BOUNDS.LOWER,
      MIDDLE_50_BOUNDS.UPPER
    ),
    middle75Interval: _getCorrespondingInterval(
      gpaData,
      MIDDLE_75_BOUNDS.LOWER,
      MIDDLE_75_BOUNDS.UPPER
    ),
    middle90Interval: _getCorrespondingInterval(
      gpaData,
      MIDDLE_90_BOUNDS.LOWER,
      MIDDLE_90_BOUNDS.UPPER
    )
  };
}

/**
 *  Calculates the average GPA given the percent of students getting each grade
 *
 *  @param {Map} state | the redux state
 *  @param {Object} props | the props of the CoursePreviewCard component
 *    requires course_id prop
 *
 */
export function calculateAverageGPAByCourseId(state, props) {
  if (!state || !props) {
    return null;
  }

  const { course_id } = props;

  const byId = getById(state);
  const courseGPAData = byId.get(course_id);
  if (!courseGPAData) {
    return null;
  }

  const gpaData = courseGPAData.toJS();

  let sum = 0;
  for (const grade of ORDER_ASC) {
    const percentWithGrade = gpaData[grade];
    const gradePointsOfGrade = GRADE_POINTS[grade];
    sum += percentWithGrade * gradePointsOfGrade;
  }

  return sum / 100;
}
