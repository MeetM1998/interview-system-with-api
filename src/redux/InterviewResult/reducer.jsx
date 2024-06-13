import actions from "./action";

const initialState = {
  Interview: {},
  InterviewResultTable: [],
  InterviewResultDetails: {},
  errorData: {},
  action: null,
  Interviewer: [
    {
      id: "9c23f23f-f840-4dd8-a573-d9e147f10a37",
      interviwer: "Malay Patel",
    },
    {
      id: "6acbf776-dc32-423e-81a1-e831994809c4",
      interviwer: "Renish Dadhaniya",
    },
    {
      id: "c1b96192-84f9-42a4-9acb-ef7134c12c16",
      interviwer: "Nirmal Jodhani",
    },
    {
      id: "33a7e1fb-03c0-49c9-a94d-0ea70c9815e8",
      interviwer: "Riddhi Kadiya",
    },
    {
      id: "13642bf2-4cfe-42e1-b409-19820085ca2d",
      interviwer: "Dhaval Thakral",
    },
    {
      id: "51ebbe56-0168-45aa-af04-f6f7d85ca30f",
      interviwer: "Keval Nayak",
    },
    {
      id: "ab6940eb-75ff-4886-9920-2eb0dea999c5",
      interviwer: "Jayesh Mojidra",
    },
    {
      id: "0554a95a-bce7-4b92-ba58-85549184c389",
      interviwer: "Deepak Alram",
    },
    {
      id: "9c23f23f-f840-4dd8-a573-d9e147f10a37",
      interviwer: "other",
    },
  ],
  Technology: [
    {
      id: "a1e67863-8382-4f89-9c69-b53980b1c242",
      technology: "Angular",
    },
    {
      id: "20757a66-25c3-420a-9e8e-7bb0cef472bc",
      technology: "React Js",
    },
    {
      id: "1e2b8e56-3781-41dd-87e4-c323bf46308c",
      technology: ".net MVC",
    },
    {
      id: "f18e0c17-b631-4907-8a7a-eaa7ad48dd64",
      technology: "Node js",
    },
    {
      id: "7fc5afd0-d38a-45c5-a8d8-c37cc821e916",
      technology: "vue js",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_INTERVIEW_RESULT_REQUEST:
      return {
        ...state,
        errorData: {},
        action: action.type,
      };
    case actions.GET_INTERVIEW_RESULT_SUCCESS:
      return {
        ...state,
        InterviewResultTable: action.payload.data,
        action: action.type,
      };
    case actions.GET_INTERVIEW_RESULT_ERROR:
      return {
        ...state,
        errorData: action.errors || {},
        action: action.type,
      };

    case actions.CREATE_INTERVIEW_RESULT_REQUEST:
      return {
        ...state,
        errorData: {},
        message: null,
        action: action.type,
      };
    case actions.CREATE_INTERVIEW_RESULT_SUCCESS:
      return {
        ...state,
        Interview: action.payload,
        action: action.type,
      };
    case actions.CREATE_INTERVIEW_RESULT_ERROR:
      return {
        ...state,
        message: action.payload,
        errorData: action.errors || {},
        action: action.type,
      };

    case actions.GET_SINGLE_INTERVIEW_RESULT_REQUEST:
      return {
        ...state,
        errorData: {},
        message: null,
        id: "",
        action: action.type,
      };
    case actions.GET_SINGLE_INTERVIEW_RESULT_SUCCESS: {
      return {
        ...state,
        InterviewResultDetails: action.payload.data,
        action: action.type,
      };
    }

    case actions.GET_SINGLE_INTERVIEW_RESULT_ERROR:
      return {
        ...state,
        message: action.payload,
        errorData: action.errors || {},
        action: action.type,
      };

    case actions.REMOVE_SINGLE_RESULT_SUCCESS:
      return {
        ...state,
        InterviewResultDetails: {},
      };

    case actions.UPDATE_INTERVIEW_DETIAL_SUCCESS:
      return {
        ...state,
      };

    case actions.DELETE_INTERVIEW_DETAIL_SUCCESS:
      return {
        ...state,
      };

    default:
      return state;
  }
};
