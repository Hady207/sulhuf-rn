import {createActions} from 'reduxsauce';

export const {Types: CreateItemTypes, Creators: CreateItemActions} =
  createActions({
    creationReq: ['postBody'],
    creationRes: ['successMessage'],
    creationFail: ['errorMessage'],
  });

export const initialState = {
  isLoading: false,
  successMessage: null,
  errorMessage: null,
};

export const createItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case CreateItemTypes.CREATION_REQ:
      return {
        ...state,
        isLoading: true,
        successMessage: null,
        errorMessage: null,
      };
    case CreateItemTypes.CREATION_RES:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        successMessage: action.successMessage,
      };
    case CreateItemTypes.CREATION_FAIL:
      return {
        ...state,
        isLoading: false,
        successMessage: null,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
