import {put, call, takeLatest} from 'redux-saga/effects';
import {itemCreationService} from '@services/dashboard';
import {navigateBack} from '@utils/navigationUtils';
import {DashboardActions} from '@containers/Dashboard/reducer';
import {CreateItemTypes, CreateItemActions} from './reducer';

function* createItemSaga({postBody}) {
  try {
    const res = yield call(itemCreationService, postBody);

    if (res.ok) {
      yield put(CreateItemActions.creationRes('data recieved'));
      yield put(DashboardActions.requestHomeData());
      yield call(navigateBack);
    } else {
      yield put(CreateItemActions.creationFail(res.data.error.message));
    }
  } catch (error) {
    yield put(CreateItemActions.creationFail(error.message));
  }
}

export default function* creationRootWacher() {
  yield takeLatest(CreateItemTypes.CREATION_REQ, createItemSaga);
}
