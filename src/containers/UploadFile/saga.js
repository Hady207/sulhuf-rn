import {put, call, takeLatest} from 'redux-saga/effects';
import {uploadService} from '../../services/dashboard';
import {UploadTypes, UploadActions} from './reducer';

function* fetchItemSaga({file}) {
  try {
    const res = yield call(uploadService, file);

    if (res.ok) {
      yield put(UploadActions.uploadRes('uploaded successfully'));
    } else {
      yield put(UploadActions.uploadRes(res.data.error.message));
    }
  } catch (error) {
    // yield put(UploadActions.itemFail(error.message));
    console.log(error);
  }
}

export default function* itemsRootWacher() {
  yield takeLatest(UploadTypes.UPLOAD_REQ, fetchItemSaga);
}
