import { combineReducers } from 'redux';

import companies from './companies/reducer';
import history from './history/reducer';
import wallet from './wallet/reducer';

export default combineReducers({
  companies,
  history,
  wallet
});