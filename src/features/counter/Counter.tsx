import React from "react";

import {useAppSelector, useAppDispatch} from "src/app/hooks";
import {
  decrement,
  increment,
  selectCount
} from "src/features/counter/CounterSlice";


export const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);


  return (
    <div>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>{count.value}</span>
        <button

          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
  );
}

