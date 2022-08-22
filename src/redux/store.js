import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

// middle ware
const myLogger = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}}`)
   
    const upcomingState = [action].reduce(rootReducer, store.getState());

    console.log(JSON.stringify(upcomingState));

    // pass action
    return next(action);
} 

const store = createStore(rootReducer, applyMiddleware(myLogger)); // store accepts reducer as a parameter;


export default store;
