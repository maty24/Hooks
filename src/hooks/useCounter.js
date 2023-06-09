import { useState } from "react"

//si no me mandan un valor por defecto, el valor por defecto es 10
export const useCounter = ( initialValue = 10 ) => {

    //el initialValue es el valor por defecto que se le da al counter
    const [ counter, setCounter ] = useState( initialValue )

    const increment = ( value = 1 ) => {
        setCounter( counter + value );
    }

    const decrement = ( value = 1 ) => {
        // if ( counter === 0 ) return;

        setCounter( counter - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }

}