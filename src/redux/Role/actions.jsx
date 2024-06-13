const actions = {
  GET_ROLE_REQUEST: "GET_ROLE_REQUEST",
  GET_ROLE_SUCCESS: "GET_ROLE_SUCCESS",
  GET_ROLE_ERROR: "GET_ROLE_ERROR",

  /**
   * get All Users Role.
   */

  getRoleRequest: () => ({
    type: actions.GET_ROLE_REQUEST,
  }),

  getRoleSuccess: (payload = {}) => ({
    type: actions.GET_ROLE_SUCCESS,
    payload,
  }),

  getRoleFailure: (payload = "", errors = {}) => ({
    type: actions.GET_ROLE_ERROR,
    payload,
    errors,
  }),
};
export default actions;
