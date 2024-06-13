import actions from "./actions";

const initialState = {
  Roles: [],
  errorData: {},
  action: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ROLE_REQUEST:
      return {
        ...state,
        errorData: {},
        action: action.type,
      };
    case actions.GET_ROLE_SUCCESS:
      return {
        ...state,
        Roles: action.payload.data,
        action: action.type,
      };
    case actions.GET_ROLE_ERROR:
      return {
        ...state,
        errorData: action.errors || {},
        action: action.type,
      };
    default:
      return state;
  }
};
