import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/dynamicCounter.js/actions';

const DynamicHooksCounter = () => {
    
  const count = useSelector((state) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  const inCrement = (value) => {
    dispatch(increment(value));
  };

  const deCrement = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div className="p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Dynamic Hooks Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
          <div className="text-2xl font-semibold">
            {count}
          </div>
          <div className="flex space-x-3">
            <button
              className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick={()=> inCrement(5)}
            >
              Increment
            </button>
            <button
              className="bg-red-400 text-white px-3 py-2 rounded shadow"
              onClick={()=>deCrement(3)}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DynamicHooksCounter;