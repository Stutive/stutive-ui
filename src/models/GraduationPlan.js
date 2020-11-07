import Immutable from 'immutable';

export default class GraduationPlan {
  constructor(graduationPlan) {
    return Immutable.fromJS(graduationPlan);
  }
}
