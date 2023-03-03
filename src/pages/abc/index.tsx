import { useReducer } from "react";
import { CountContainer } from "./styles";

export function ReducerExample() {

  interface ReduceState {
    
  }

  const [state, dispatch] = useReducer(counterReducer, {})

  function counterReducer(state: any, action: any) {
    console.log(action.type)
    switch (action.type) {
      case 'INCREMENT': {
        return state + 1;
      }
      case 'DECREMENT': {
        return state - 1;
      }
      case 'RESET': {
        return 0
      }
      default:
        return state;
    }
  }

  function increment() {
    dispatch({
      type: 'INCREMENT',
      payload: {

      }
    });
  }

  function decrement() {
    dispatch({
      type: 'DECREMENT',
    });
  }

  function reset() {
    dispatch({
      type: 'RESET',
    });
  }

  return (
    <CountContainer>
      <h2>Contador</h2>
      <h1>{state}</h1>
      <div className="displayButton">
        <button onClick={decrement}>Decrement (-)</button>
        <button onClick={increment}>Increment (+)</button>
      </div>
      <button onClick={reset}>Reset</button>
    </CountContainer>
  );
}