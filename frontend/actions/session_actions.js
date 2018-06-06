import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser))
    , err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(res => dispatch(logoutCurrentUser(res)))
);

export const signup = user => dispatch => (
  APIUtil.signupUser(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser))
    , err => ( dispatch(receiveErrors(err.responseJSON))
  ))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
