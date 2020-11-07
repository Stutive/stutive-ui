import Immutable, { List } from 'immutable';

export default class Semester {
  constructor(id, label) {
    return Immutable.fromJS({
      id,
      label,
      courseIds: List(),
      totalCreditHours: 0
    });
  }
}
