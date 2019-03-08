import { all } from 'redux-saga/effects';
import { watchGetProfile } from './data';

export default function* rootSaga() {
  yield all([
    watchGetProfile(),
  ]);
}
