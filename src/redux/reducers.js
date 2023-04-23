import { combineReducers } from "redux";

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

export default rootReducer;