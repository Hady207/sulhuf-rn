import {createActions} from 'reduxsauce';

export const {Types: RootTypes, Creators: RootActions} = createActions({
  signIn: ['user', 'token'],
  signOut: null,
});

export const initialState = {
  isLoading: false,
  userProfile: null,
  errorMessage: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case RootTypes.SIGN_IN:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        userProfile: action.user,
        token: action.token,
      };

    case RootTypes.SIGN_OUT:
      return initialState;

    default:
      return state;
  }
};
