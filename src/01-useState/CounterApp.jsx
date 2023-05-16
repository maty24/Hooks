import { useState } from "react";

export const CounterApp = () => {
  //le estoy diciendo a react que este es el estado inicial y le doy valores a cada uno de los elementos del objeto
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  //estoy desestructurando el objeto state
  const { counter1, counter2, counter3 } = state;

  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>

      <hr />

      <button
        className="btn"
        onClick={() =>
          setCounter({
            //el ...state es para que no se pierdan los otros valores del objeto ya que al cambiar el valor de counter1 se pierden los otros valores
            ...state,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
