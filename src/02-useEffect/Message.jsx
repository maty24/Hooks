import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      // const coords = { x, y };
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    //el return es para limpiar el efecto cuando el componente se desmonta y evitar fugas de memoria
    return () => {
      //tengo que tener la referencia para poder limpiar el efecto
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  );
};
