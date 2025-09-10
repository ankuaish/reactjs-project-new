import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrementClick = () => {
    dispatch(increment());
  };
  const handleDecrementClick = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncAmount = () => {
    dispatch(incrementByAmount(amount));
  };
  return (
    <>
      <div className="container">
        <button onClick={handleIncrementClick}> +</button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}>-</button>
        <br />
        <br />
        <button onClick={handleReset}>Reset</button>
        <br />
        <br />
        <input
          type="number"
          value={amount}
          placeholder="enter amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleIncAmount}>Inc by amount</button>
      </div>
    </>
  );
}

export default App;
