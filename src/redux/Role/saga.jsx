import { all, takeEvery, put } from "redux-saga/effects";
import actions from "./actions";
import { axiosGet } from "../../Helper/axiosHelper";

/**
 * get all Role.
 *
 */
export function* getRole() {
  try {
    const { data } = yield axiosGet(`getAllRole`);
    yield put(actions.getRoleSuccess(data));
  } catch (error) {
    yield put(actions.getRoleFailure(error.message, error.data || {}));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.GET_ROLE_REQUEST, getRole)]);
}
