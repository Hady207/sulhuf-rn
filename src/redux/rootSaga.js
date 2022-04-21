import {fork} from 'redux-saga/effects';
import rootSaga from '@containers/Root/saga';
import authSaga from '@containers/Auth/saga';
import dashboardSaga from '@containers/Dashboard/saga';
import createSaga from '@containers/CreateItem/saga';
import updateSaga from '@containers/UpdateItem/saga';
import orderSaga from '@containers/Orders/saga';
import fileSaga from '@containers/UploadFile/saga';

export default function* root() {
  yield fork(rootSaga);
  yield fork(authSaga);
  yield fork(dashboardSaga);
  yield fork(createSaga);
  yield fork(updateSaga);
  yield fork(orderSaga);
  yield fork(fileSaga);
}
