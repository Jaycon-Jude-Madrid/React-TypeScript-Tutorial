import React, { useEffect, useReducer, useRef } from "react";

interface StateProps {
  timer: number;
  render: boolean;
}
const reducer = (state: StateProps, action: any) => {
  switch (action.type) {
    case "timer":
      return { ...state, timer: state.timer + 1 };
    case "resetTimer":
      return { ...state, timer: 0 };
    case "renderButton":
      return { ...state, render: action.payload };

    default:
      return state;
  }
};

const initialState = {
  timer: 0,
  render: true,
};

const MutableRef = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (interValRef.current) {
      window.clearInterval(interValRef.current);
      dispatch({ type: "renderButton", payload: !state.render });
    }
  };
  const startTimer = () => {
    interValRef.current = window.setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);

    dispatch({ type: "renderButton", payload: !state.render });
  };

  const resetTimer = () => {
    if (interValRef.current) {
      window.clearInterval(interValRef.current);
      dispatch({ type: "renderButton", payload: true });
      dispatch({ type: "resetTimer" });
      window.clearInterval(interValRef.current);
    }
  };

  return (
    <div>
      HookTimer - {state.timer} -{" "}
      {state.render ? (
        <button onClick={startTimer}> Start timer</button>
      ) : (
        <button onClick={() => stopTimer()}>Stop Timer </button>
      )}
      <button onClick={resetTimer}> Reset</button>
    </div>
  );
};

export default MutableRef;
