import {createActions} from 'reduxsauce';

export const {Types: UpdateItemTypes, Creators: UpdateItemActions} =
  createActions({
    updateReq: ['id', 'updateBody'],
    updateRes: ['successMessage'],
    updateFail: ['errorMessage'],
  });

export const initialState = {
  isLoading: false,
  successMessage: null,
  errorMessage: null,
};

export const updateItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case UpdateItemTypes.UPDATE_REQ:
      return {
        ...state,
        isLoading: true,
        successMessage: null,
        errorMessage: null,
      };
    case UpdateItemTypes.UPDATE_RES:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        successMessage: action.successMessage,
      };
    case UpdateItemTypes.UPDATE_FAIL:
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
