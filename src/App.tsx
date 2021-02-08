import React from "react";
import Routes from "./Routes";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Redux/Actions";
const App = () => {
  // <Routes />
  // const counter = useSelector((state) => state.counter);
  // const disPatch = useDispatch();
  // Home {counter}
  // <button onClick={() => disPatch(increment())}>+</button>
  // <button onClick={() => disPatch(decrement())}>-</button>
  return (
    <div>
      <Routes />
    </div>
  );
};

export default App;
