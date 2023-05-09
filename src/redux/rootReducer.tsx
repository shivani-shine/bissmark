import { SHOW_SIDEBAR } from "./types";

const initState = {
  // isLogin: false,
  data: [],
};

const rootReducer = (state = initState, action:any) => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return {
        ...state,
        showSideBar: action.payload,
        // isLogin: true,
      };
    default: // need this for default case
      return state;
  }
};

export default rootReducer;
