import {put, call, takeLatest} from 'redux-saga/effects';
import {itemUpdateService} from '../../services/dashboard';
import {navigateBack} from '@utils/navigationUtils';
import {DashboardActions} from '@containers/Dashboard/reducer';
import {UpdateItemTypes, UpdateItemActions} from './reducer';

function* editItemSaga({id, updateBody}) {
  try {
    const res = yield call(itemUpdateService, id, updateBody);

    if (res.ok) {
      yield put(UpdateItemActions.updateRes(res?.data));
      yield put(DashboardActions.selectData(res.data));
      yield put(DashboardActions.requestHomeData());

      yield call(navigateBack);
    }
  } catch (error) {
    yield put(UpdateItemActions.updateFail(error.message));
  }
}

export default function* homeRootWacher() {
  yield takeLatest(UpdateItemTypes.UPDATE_REQ, editItemSaga);
}
