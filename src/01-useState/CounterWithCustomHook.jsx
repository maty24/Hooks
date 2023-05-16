import { useCounter } from "../hooks/useCounter";

useCounter;
export const CounterWithCustomHook = () => {
  //estoy desestructurando el objeto state que es mi propio hook
  const { counter, increment, decrement, reset } = useCounter();

  //lo desesturado son funciones que vienen de mi propio hook y le puedo enviar argumentos
  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button onClick={() => increment(2)} className="btn btn-primary">
        +1
      </button>
      <button onClick={reset} className="btn btn-primary">
        Reset
      </button>
      <button onClick={() => decrement(2)} className="btn btn-primary">
        -1
      </button>
    </>
  );
};
