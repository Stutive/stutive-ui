import Immutable from 'immutable';

export default class Course {
  constructor(course) {
    return Immutable.fromJS(course);
  }
}
