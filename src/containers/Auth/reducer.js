import {createActions} from 'reduxsauce';

export const {Types: AuthTypes, Creators: AuthActions} = createActions({
  requestLogin: ['identifier', 'password'],
  loginSuccess: null,
  loginFail: ['errorMessage'],
});

export const initialState = {
  loginIsLoading: false,
  loginErrorMessage: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.REQUEST_LOGIN:
      return {...state, loginIsLoading: true};
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginIsLoading: false,
        loginErrorMessage: null,
      };
    case AuthTypes.LOGIN_FAIL:
      return {
        ...state,
        loginIsLoading: false,
        loginErrorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
