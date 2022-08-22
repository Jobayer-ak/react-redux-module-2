import { createStore } from "redux";
import rootReducer from "./rootReducer";


const store = createStore(rootReducer); // store accepts reducer as a parameter;


export default store;
