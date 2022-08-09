import React, { useEffect, useReducer } from "react";

interface ActionProps {
  type: string;
  payload?: any;
}

const reducer = (state: any, action: ActionProps) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "reset":
      return { ...state, count: 0 };
    case "userInput":
      return { ...state, userInput: action.payload };
    case "toggleColor":
      return { ...state, colorChange: action.payload };
    case "getData":
      return { ...state, getData: action.payload };
    default:
      console.error(`Unhandled action type ${action.type}`);
      return state;
  }
};

const initialState = {
  count: 0,
  userInput: "",
  colorChange: false,
  getData: [],
};
const UseReduce = () => {
  const dataFetch = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    dispatch({ type: "getData", payload: json });
  };
  useEffect(() => {
    dataFetch();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state.getData);

  const increment = () => {
    dispatch({ type: "increment", payload: 1 });
  };
  const decrement = () => {
    dispatch({ type: "decrement", payload: 1 });
  };

  const handleChange = (e: any) => {
    dispatch({ type: "userInput", payload: e.target.value });
  };
  const toggleColor = () => {
    dispatch({ type: "toggleColor", payload: !state.colorChange });
  };
  return (
    <div>
      <input value={state.userInput} onChange={handleChange} />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={toggleColor}>Change color</button>
      <h4 style={{ color: state.colorChange ? "green" : "black" }}>
        {state.userInput}
      </h4>
      <h4>{state.count}</h4>
      {state.getData.slice(0, 5).map((item: any) => {
        return (
          <>
            <h4 style={{ color: state.colorChange ? "green" : "black" }}>
              {item.title}
            </h4>
          </>
        );
      })}
    </div>
  );
};

export default UseReduce;
