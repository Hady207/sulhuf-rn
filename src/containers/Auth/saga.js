import {put, call, takeLatest} from 'redux-saga/effects';
import {loginService} from '../../services/auth';
import {AuthTypes, AuthActions} from './reducer';
import {RootActions} from '../Root/reducer';
import {storageWrite} from '@utils/storageUtils';

function* loginSaga({identifier, password}) {
  try {
    const postBody = {identifier, password};
    const response = yield call(loginService, postBody);

    if (response.ok) {
      yield put(RootActions.signIn(response?.data?.user, response.data.jwt));
      yield call(storageWrite, 'token', response.data.jwt);
      yield put(AuthActions.loginSuccess());
    } else {
      yield put(AuthActions.loginFail('login failed'));
    }
  } catch (error) {
    console.log(error);
    yield put(AuthActions.loginFail('login failed'));
  }
}

export default function* authSaga() {
  yield takeLatest(AuthTypes.REQUEST_LOGIN, loginSaga);
}
