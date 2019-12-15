import { FILTER_OPTIONS_RESPONSE } from '../fixtures/FilterOptions';

export function fetch() {
  //  TODO(Alpri): Actually implement this when the api is ready
  return new Promise(resolve => {
    resolve(FILTER_OPTIONS_RESPONSE);
  });
}
