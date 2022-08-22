import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import myLogger from "./middlewares/myLogger";
import { composeWithDevTools } from "redux-devtools-extension";


// store accepts reducer as a parameter;
const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(logger, myLogger))); 


export default store;
