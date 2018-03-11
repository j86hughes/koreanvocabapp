import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../modules';

export const connector = (moduleName, stateFn, actions) => {
  stateFn = stateFn || (() => {});
  actions = actions || {};

  return connect(
    state => ({ ...state[moduleName].toJS(), ...stateFn(state) }),
    dispatch => bindActionCreators({ ...actionCreators[moduleName], ...actions }, dispatch)
  );
};
