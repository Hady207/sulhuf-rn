import {call, takeLatest} from 'redux-saga/effects';

import {storageDelete} from '@utils/storageUtils';
import {RootTypes} from './reducer';

export function* clearStorageSaga() {
  try {
    yield call(storageDelete, 'accessToken');
    yield call(storageDelete, 'userId');
  } catch (error) {
    console.log(error);
  }
}

export default function* rootScreenSaga() {
  yield takeLatest(RootTypes.SIGN_OUT, clearStorageSaga);
}
