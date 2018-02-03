import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../modules';

export const connector = (moduleName, actions) => {
  actions = actions || {};

  return connect(
    state => ({ ...state.get(moduleName) }),
    dispatch => bindActionCreators({ ...actionCreators[moduleName], ...actions }, dispatch)
  );
};
