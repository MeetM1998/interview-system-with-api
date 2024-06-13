const actions = {
  GET_INTERVIEW_RESULT_REQUEST: "GET_INTERVIEW_RESULT_REQUEST",
  GET_INTERVIEW_RESULT_SUCCESS: "GET_INTERVIEW_RESULT_SUCCESS",
  GET_INTERVIEW_RESULT_ERROR: "GET_INTERVIEW_RESULT_ERROR",

  CREATE_INTERVIEW_RESULT_REQUEST: "CREATE_INTERVIEW_RESULT_REQUEST",
  CREATE_INTERVIEW_RESULT_SUCCESS: "CREATE_INTERVIEW_RESULT_SUCCESS",
  CREATE_INTERVIEW_RESULT_ERROR: "CREATE_INTERVIEW_RESULT_ERROR",

  GET_SINGLE_INTERVIEW_RESULT_REQUEST: "GET_SINGLE_INTERVIEW_RESULT_REQUEST",
  GET_SINGLE_INTERVIEW_RESULT_SUCCESS: "GET_SINGLE_INTERVIEW_RESULT_SUCCESS",
  GET_SINGLE_INTERVIEW_RESULT_ERROR: "GET_SINGLE_INTERVIEW_RESULT_ERROR",

  REMOVE_SINGLE_RESULT_REQUEST: "REMOVE_SINGLE_RESULT_REQUEST",
  REMOVE_SINGLE_RESULT_SUCCESS: "REMOVE_SINGLE_RESULT_SUCCESS",
  REMOVE_SINGLE_RESULT_ERROR: "REMOVE_SINGLE_RESULT_ERROR",

  UPDATE_INTERVIEW_DETIAL_REQUEST: "UPDATE_INTERVIEW_DETIAL_REQUEST",
  UPDATE_INTERVIEW_DETIAL_SUCCESS: "UPDATE_INTERVIEW_DETIAL_SUCCESS",
  UPDATE_INTERVIEW_DETIAL_ERROR: "UPDATE_INTERVIEW_DETIAL_ERROR",

  DELETE_INTERVIEW_DETAIL_REQUEST: "DELETE_INTERVIEW_DETAIL_REQUEST",
  DELETE_INTERVIEW_DETAIL_SUCCESS: "DELETE_INTERVIEW_DETAIL_SUCCESS",
  DELETE_INTERVIEW_DETAIL_ERROR: "DELETE_INTERVIEW_DETAIL_ERROR",

  /**
   *  get All Interview Result.
   */
  getInterviewReport: () => ({
    type: actions.GET_INTERVIEW_RESULT_REQUEST,
  }),

  getInterviewReportSuccess: (payload = {}) => ({
    type: actions.GET_INTERVIEW_RESULT_SUCCESS,
    payload,
  }),

  getInterviewReportFailure: (payload = "", errors = {}) => ({
    type: actions.GET_INTERVIEW_RESULT_ERROR,
    payload,
    errors,
  }),

  /**
   * request to create interview result.
   */
  createInterviewReport: (queryParams) => ({
    type: actions.CREATE_INTERVIEW_RESULT_REQUEST,
    queryParams,
  }),

  createInterviewReportSuccess: (payload = {}) => ({
    type: actions.CREATE_INTERVIEW_RESULT_SUCCESS,
    payload,
  }),

  createInterviewReportFailure: (payload = "", errors = {}) => ({
    type: actions.CREATE_INTERVIEW_RESULT_ERROR,
    payload,
    errors,
  }),

  /**
   *  get Single Interview Result .
   */
  getSingleInterviewResultRequest: (id) => ({
    type: actions.GET_SINGLE_INTERVIEW_RESULT_REQUEST,
    id,
  }),

  getSingleInterviewResultSuccess: (payload = {}) => ({
    type: actions.GET_SINGLE_INTERVIEW_RESULT_SUCCESS,
    payload,
  }),

  getSingleInterviewResultFailure: (payload = "", errors = {}) => ({
    type: actions.GET_SINGLE_INTERVIEW_RESULT_ERROR,
    payload,
    errors,
  }),

  /**
   *  get Single Remove Interview Result .
   */

  singleRemoveResultRequest: () => ({
    type: actions.REMOVE_SINGLE_RESULT_REQUEST,
  }),

  singleRemoveResultSuccess: () => ({
    type: actions.REMOVE_SINGLE_RESULT_SUCCESS,
  }),

  singleRemoveResultError: () => ({
    type: actions.REMOVE_SINGLE_RESULT_ERROR,
  }),

  /**
   *  update interview Result .
   */

  updateInterviewResult: (payload, id) => ({
    type: actions.UPDATE_INTERVIEW_DETIAL_REQUEST,
    id,
    payload,
  }),

  updateInterviewResultSuccess: (payload = {}) => ({
    type: actions.UPDATE_INTERVIEW_DETIAL_SUCCESS,
    payload,
  }),

  updateInterviewResultFailure: (payload = "", errors = {}) => ({
    type: actions.UPDATE_INTERVIEW_DETIAL_ERROR,
    payload,
    errors,
  }),

  /**
   * delete Interview Result .
   */
  deleteInterviewResult: (id) => ({
    type: actions.DELETE_INTERVIEW_DETAIL_REQUEST,
    id,
  }),

  deleteInterviewResultSuccess: (payload) => ({
    type: actions.DELETE_INTERVIEW_DETAIL_SUCCESS,
    payload,
  }),

  deleteInterviewResultError: (payload = "", errors = {}) => ({
    type: actions.DELETE_INTERVIEW_DETAIL_ERROR,
    payload,
    errors,
  }),
};

export default actions;
