import {
  call, put, takeEvery,
} from 'redux-saga/effects';
import * as DataAction from '../actions/data';
import * as api from '../api';

export function* handleGetProfile(action) {
  try {
    const { count } = action;
    const result = yield call(api.getProfiles, count);
    console.log(result);
    // yield put(DataAction.updateData(fromJS({ [payload]: result })));
    yield put(DataAction.getProfileSuccess());
  } catch (error) {
    yield put(DataAction.getProfileFail(error));
  }
}

export function* watchGetProfile() {
  yield takeEvery(DataAction.GET_PROFILE, handleGetProfile);
}
