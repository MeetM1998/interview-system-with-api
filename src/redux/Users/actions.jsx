const actions = {
  GET_ALL_USERS_REQUEST: "GET_ALL_USERS_REQUEST",
  GET_ALL_USERS_SUCCESS: "GET_ALL_USERS_SUCCESS",
  GET_ALL_USERS_ERROR: "GET_ALL_USERS_ERROR",

  CREATE_USERS_REQUEST: "CREATE_USERS_REQUEST",
  CREATE_USERS_SUCCESS: "CREATE_USERS_SUCCESS",
  CREATE_USERS_ERROR: "CREATE_USERS_ERROR",

  GET_SINGLE_USERS_REQUEST: "GET_SINGLE_USERS_REQUEST",
  GET_SINGLE_USERS_SUCCESS: "GET_SINGLE_USERS_SUCCESS",
  GET_SINGLE_USERS_ERROR: "GET_SINGLE_USERS_ERROR",

  REMOVE_SINGLE_USERS_REQUEST: "REMOVE_SINGLE_USERS_REQUEST",
  REMOVE_SINGLE_USERS_SUCCESS: "REMOVE_SINGLE_USERS_SUCCESS",
  REMOVE_SINGLE_USERS_ERROR: "REMOVE_SINGLE_USERS_ERROR",

  UPDATE_USERS_DETAIL_REQUEST: "UPDATE_USERS_DETAIL_REQUEST",
  UPDATE_USERS_DETAIL_SUCCESS: "UPDATE_USERS_DETAIL_SUCCESS",
  UPDATE_USERS_DETAIL_ERROR: "UPDATE_USERS_DETAIL_ERROR",

  DELETE_USERS_DETAIL_REQUEST: "DELETE_USERS_DETAIL_REQUEST",
  DELETE_USERS_DETAIL_SUCCESS: "DELETE_USERS_DETAIL_SUCCESS",
  DELETE_USERS_DETAIL_ERROR: "DELETE_USERS_DETAIL_ERROR",
  /**
   * request to create Users result report.
   */
  createUsersReport: (queryParams) => ({
    type: actions.CREATE_USERS_REQUEST,
    queryParams,
  }),

  /**
   * when create Users result report is successfull.
   */
  createUsersReportSuccess: (payload = {}) => ({
    type: actions.CREATE_USERS_SUCCESS,
    payload,
  }),

  /**
   * when something went wrong with create Users result report.
   */
  createUsersReportFailure: (payload = "", errors = {}) => ({
    type: actions.CREATE_USERS_ERROR,
    payload,
    errors,
  }),

  /**
   * request to get report.
   */
  getUsersReport: () => ({
    type: actions.GET_ALL_USERS_REQUEST,
  }),

  getUsersReportSuccess: (payload = {}) => ({
    type: actions.GET_ALL_USERS_SUCCESS,
    payload,
  }),

  getUsersReportFailure: (payload = "", errors = {}) => ({
    type: actions.GET_ALL_USERS_ERROR,
    payload,
    errors,
  }),

  /**
   * request to get single user report.
   */

  getSingleUsersRequest: (id) => ({
    type: actions.GET_SINGLE_USERS_REQUEST,
    id,
  }),

  getSingleUsersSuccess: (payload = {}) => ({
    type: actions.GET_SINGLE_USERS_SUCCESS,
    payload,
  }),

  getSingleUsersFailure: (payload = "", errors = {}) => ({
    type: actions.GET_SINGLE_USERS_ERROR,
    payload,
    errors,
  }),

  /**
   *  get Single Remove Remove .
   */

  singleRemoveUsersRequest: () => ({
    type: actions.REMOVE_SINGLE_USERS_REQUEST,
  }),

  singleRemoveUsersSuccess: () => ({
    type: actions.REMOVE_SINGLE_USERS_SUCCESS,
  }),

  singleRemoveUsersError: () => ({
    type: actions.REMOVE_SINGLE_USERS_ERROR,
  }),

  /**
   * request to update result.
   */
  updateUsersDetail: (payload, id) => ({
    type: actions.UPDATE_USERS_DETAIL_REQUEST,
    id,
    payload,
  }),

  updateUsersDetailSuccess: (payload = {}) => ({
    type: actions.UPDATE_USERS_DETAIL_SUCCESS,
    payload,
  }),

  updateUsersDetailFailure: (payload = "", errors = {}) => ({
    type: actions.UPDATE_USERS_DETAIL_ERROR,
    payload,
    errors,
  }),

  /**
   * request delete .
   */
  deleteUsers: (id) => ({
    type: actions.DELETE_USERS_DETAIL_REQUEST,
    id,
  }),

  deleteUsersSuccess: (payload) => ({
    type: actions.DELETE_USERS_DETAIL_SUCCESS,
    payload,
  }),

  deleteUsersError: (payload = "", errors = {}) => ({
    type: actions.DELETE_USERS_DETAIL_ERROR,
    payload,
    errors,
  }),
};

export default actions;
