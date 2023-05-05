import { combineReducers } from "redux";
import {persistReducer, createTransform} from "redux-persist";
import JSOG from 'jsog';
import storage from "redux-persist/lib/storage";

export const JSOGTransform = createTransform(
  (inboundState, key) => JSOG.encode(inboundState),
  (outboundState, key) => JSOG.decode(outboundState),
)


const persistConfig  = {
  key: "root",
  storage,
  whiteList: ["authReducer", "counterReducer"],
  transforms: [JSOGTransform]
}




const authReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return action.authObj;
    default: return state
  }
};

const counterReducer = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.amount;
    default: return state
  }
};


const rootReducer = combineReducers({
    auth: authReducer,
    count: counterReducer
})

export default persistReducer(persistConfig, rootReducer);