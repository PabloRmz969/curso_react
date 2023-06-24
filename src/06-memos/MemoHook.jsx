import { useState } from "react";
import { useCounter } from "../hooks"
import { useMemo } from "react";

const heavyStuff = (iterationValue = 100) => {
    for (let i = 0; i < iterationValue; i++) {
        console.log('Ahí vamos...');
    }

    return `${iterationValue} iteraciones realizadas `;
}


export const MemoHook = () => {
    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />
            <h4>{memorizedValue}</h4>
            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                onClick={() => setShow(!show)}
                className="btn btn-outline-primary"
            >
                Show/hide {JSON.stringify(show)}
            </button>
        </>
    )
}
