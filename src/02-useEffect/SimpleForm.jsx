import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "fernando@google.com",
  });

  const { username, email } = formState;

  //esta funcion hace que cada vez que se escriba en el input se actualice el estado
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //este useEffect se ejecuta cuando el componente se renderiza por primera vez
  useEffect(() => {
    // console.log('useEffect called!');
  }, []);

  //este useEffect se ejecuta cuando el componente esta listo por primera vez y cuando el formState cambia
  useEffect(() => {
    //se va a ejacutar cada vez que el formState cambie
  }, [formState]);

  //este useEffect se ejecuta cuando el componente esta listo por primera vez y cuando el email cambia
  useEffect(() => {
    // se va a ejecutar cada vez que el email cambie
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="fernando@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "strider2" && <Message />}
    </>
  );
};
