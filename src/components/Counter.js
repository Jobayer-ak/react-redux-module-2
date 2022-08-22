import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

const Counter = ({ count, increment, decrement, id }) => {
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
          <div className="text-2xl font-semibold">{count}</div>
          <div className="flex space-x-3">
            <button
              className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick={increment}
            >
              Increment
            </button>
            <button
              className="bg-red-400 text-white px-3 py-2 rounded shadow"
              onClick={decrement}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// A HOC is a function that that takes a component as parameter and returns a new component
// const NewComponent = HOC(OriginalComponent);
// connect function returns Higher Order Component(HOC)
// when we call connect() we get HOC after we have to provide a react component as parameter

const mapStateToProps = (state, ownProps) => {
  // props always is a object

  console.log(ownProps)
  return {
    count: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value )),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
