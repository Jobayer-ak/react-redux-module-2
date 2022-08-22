// import logo from './logo.svg';
import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import DynamicHooksCounter from "./components/DynamicHooksCounter";
import HooksCounter from "./components/HooksCounter";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
     
        {/* <Counter id="1" /> */}
        <HooksCounter />
        <DynamicHooksCounter/>
    
    </Provider>
  );
}
