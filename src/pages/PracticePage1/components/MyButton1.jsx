import "../PracticePage1.css";
import { useState } from "react";

// Practice Session 1
export default function MyButton1() {
  const [count, setCount] = useState(0);

  const click = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="practice-session-wrap">
        <h1>
          Practice #1
          <br></br>
          Button
        </h1>
        <h2>"Updating button value."</h2>
        <div className="practice-feat-wrap">
          <button onClick={click}>Press this button</button>
          <button onClick={reset}>Reset</button>
          <div id="count-val">Clicked {count} times</div>
        </div>
      </div>
    </>
  );
}
