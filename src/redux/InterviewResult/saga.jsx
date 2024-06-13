import { all, takeEvery, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import actions from "./action";
import {
  axiosGet,
  axiosPost,
  axiosDelete,
  axiosPut,
} from "../../Helper/axiosHelper";

/**
 * get all Interview Result.
 *
 */
export function* getInterviewReport() {
  try {
    const { data } = yield axiosGet(`getAllInterViewResultDetails`);
    yield put(actions.getInterviewReportSuccess(data));
  } catch (error) {
    yield put(
      actions.getInterviewReportFailure(error.message, error.data || {})
    );
  }
}

/**
 *  create Interview Result report.
 */
export function* createInterviewReport({ queryParams }) {
  try {
    const { data } = yield axiosPost(queryParams, `submitInterView`);

    yield put(actions.createInterviewReportSuccess(data));
    yield put(actions.getInterviewReport());
    yield put(push("/interview-result"));
  } catch (error) {
    yield put(
      actions.createInterviewReportFailure(error.message, error.data || {})
    );
  }
}

/**
 * get single detail of interview result.
 */
export function* getSingleInterviewResultData({ id }) {
  try {
    const { data } = yield axiosGet(`getInterViewResultDetails/${id}`);
    yield put(actions.getSingleInterviewResultSuccess(data));
  } catch (error) {
    yield put(
      actions.getSingleInterviewResultFailure(error.message, error.data || {})
    );
  }
}

/**
 *  Remove single detail of interview result.
 */

export function* removeSingleResultRequest() {
  try {
    yield put(actions.singleRemoveResultSuccess());
  } catch (error) {
    yield put(
      actions.getSingleInterviewResultFailure(error.message, error.data || {})
    );
  }
}

/**
 * update interview result.
 *
 */
export function* updateResultRequest({ payload, id }) {
  try {
    const { data } = yield axiosPut(payload, `updateInterViewResult/${id}`);
    yield put(actions.updateInterviewResultSuccess(data));

    yield put(push("/interview-result"));
  } catch (error) {
    yield put(
      actions.updateInterviewResultFailure(error.message, error.data || {})
    );
  }
}

/**
 *  delete interview result.
 */

export function* deleteInterviewResult({ id }) {
  const { data } = yield axiosDelete(`deleteInterViewResult/${id}`);
  yield put(actions.getInterviewReport(data));
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.CREATE_INTERVIEW_RESULT_REQUEST, createInterviewReport),
    takeEvery(actions.GET_INTERVIEW_RESULT_REQUEST, getInterviewReport),
    takeEvery(
      actions.GET_SINGLE_INTERVIEW_RESULT_REQUEST,
      getSingleInterviewResultData
    ),
    takeEvery(actions.REMOVE_SINGLE_RESULT_REQUEST, removeSingleResultRequest),
    takeEvery(actions.UPDATE_INTERVIEW_DETIAL_REQUEST, updateResultRequest),
    takeEvery(actions.DELETE_INTERVIEW_DETAIL_REQUEST, deleteInterviewResult),
  ]);
}
