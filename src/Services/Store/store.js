import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import Reducers from "../Reducers/reducers";
import { initialState } from "../Reducers/reducers";

const store = createStore(Reducers, initialState, applyMiddleware(thunk));

export default store;
