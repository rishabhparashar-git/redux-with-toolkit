import { useDispatch, useSelector } from "react-redux"; //for Functional Component
import { counterActions } from "../store/index";

import classes from "./Counter.module.css";

const FunctionalCounter = () => {
  const { counter, showCounter } = useSelector((state) => state.counterReducer);

  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    console.log("- button");
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter());
  };
  const resetCounterHandler = () => {
    dispatch(counterActions.reset());
  };
  const boostCounterHandler = () => {
    dispatch(counterActions.boost(10));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter (Functional Component)</h1>
      <div className={classes.value}>{showCounter ? counter : ""}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <div></div>
      <button onClick={boostCounterHandler}>Boost</button>
      <button onClick={toggleCounterHandler}>Toggle</button>
      <button onClick={resetCounterHandler}>Reset</button>
    </main>
  );
};

export default FunctionalCounter;
