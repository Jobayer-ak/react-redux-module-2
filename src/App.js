// import logo from './logo.svg';
import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store = {store}>
      <Counter/>
    </Provider>
  );
}



