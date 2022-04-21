import {createActions} from 'reduxsauce';

export const {Types: UploadTypes, Creators: UploadActions} = createActions({
  uploadReq: ['file'],
  uploadRes: ['success'],
});

export const initialState = {
  isLoading: false,
  successMessage: null,
};

export const uploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case UploadTypes.UPLOAD_REQ:
      return {
        ...state,
        isLoading: true,
      };

    case UploadTypes.UPLOAD_RES:
      return {
        ...state,
        isLoading: false,
        successMessage: action.success,
      };

    default:
      return state;
  }
};
