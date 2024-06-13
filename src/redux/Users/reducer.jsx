import actions from "./actions";

const initialState = {
  users: {},
  UsersTable: [],
  UsersDetails: {},
  errorData: {},
  action: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_USERS_REQUEST:
      return {
        ...state,
        errorData: {},
        message: null,
        action: action.type,
      };
    case actions.CREATE_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        action: action.type,
      };
    case actions.CREATE_USERS_ERROR:
      return {
        ...state,
        message: action.payload,
        errorData: action.errors || {},
        action: action.type,
      };
    case actions.GET_ALL_USERS_REQUEST:
      return {
        ...state,
        errorData: {},
        action: action.type,
      };
    case actions.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        UsersTable: action.payload.data,
        action: action.type,
      };
    case actions.GET_ALL_USERS_ERROR:
      return {
        ...state,
        errorData: action.errors || {},
        action: action.type,
      };
    case actions.GET_SINGLE_USERS_REQUEST:
      return {
        ...state,
        errorData: {},
        message: null,
        id: "",
        action: action.type,
      };
    case actions.GET_SINGLE_USERS_SUCCESS: {
      return {
        ...state,
        UsersDetails: action.payload.data,
        action: action.type,
      };
    }

    case actions.GET_SINGLE_USERS_ERROR:
      return {
        ...state,
        message: action.payload,
        errorData: action.errors || {},
        action: action.type,
      };

    case actions.REMOVE_SINGLE_USERS_SUCCESS:
      return {
        ...state,
        UsersDetails: {},
      };

    case actions.UPDATE_USERS_DETAIL_SUCCESS:
      return {
        ...state,
      };
    case actions.DELETE_USERS_DETAIL_REQUEST:
      return {
        ...state,
      };
    case actions.DELETE_USERS_DETAIL_SUCCESS:
      return {
        ...state,
      };

    case actions.DELETE_USERS_DETAIL_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
