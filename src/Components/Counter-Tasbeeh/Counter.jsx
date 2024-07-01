import { useState } from "react";

function Counter() {
  let [counter, setcounter] = useState(0);

  const addValue = () => {
    if (counter < 9999) {
      setcounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };

  const reset = () => {
 
    setcounter(counter = 0);
  };

  return (
    <>
      <h1 className="text-red-600 text-6xl font-serif font-bold text-center pt-5">
        Counter Tasbeh
      </h1>

      <h2 className="text-3xl font-serif font-bold text-center pt-5">
        Counter Value : {counter}
      </h2>

      <div className="button flex  flex-col justify-center items-center">
        <button
          onClick={addValue}
          className="bg-yellow-300 py-3 px-7 mt-5 font-bold"
        >
          Add Value : {counter}
        </button>
        <br />
        <button
          onClick={removeValue}
          className="bg-yellow-300 py-3 px-7 font-bold "
        >
          Remove Value : {counter}
        </button>

        <button
          onClick={reset}
          className="bg-yellow-300 py-3 px-7 font-bold mt-5 "
        >
          Reset : {counter}
        </button>
      </div>
    </>
  );
}

export default Counter;
