import {combineReducers} from 'redux';
import rootReducer from "./rootReducer";
//import appReducer from "./appReducer";

const reducer = combineReducers({
    rootReducer: rootReducer,
    //appReducer: appReducer,
  });

export default reducer;  