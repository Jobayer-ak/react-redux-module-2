import { createStore } from "redux";
import counterReducer from "./counter/counterReducer";

const store = createStore(counterReducer); // store accepts reducer as a parameter;

export default store;
