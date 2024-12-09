import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const restart = () => {
    setCounter(0);
  };

  return (
    <div>
      {counter}
      <button onClick={handleClick}>+</button>
      <button onClick={restart}>restart</button>
    </div>
  );
};

export default App;
