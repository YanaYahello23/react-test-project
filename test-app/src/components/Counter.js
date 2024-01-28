import "./Counter.scss"
import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    function plus() {
        setCount(count + 1);
    }

    function minus() {
        setCount(count - 1);
    }

    return (
        <div className="counter-block">
            <div><button onClick={minus}>-</button></div>
            <input value={count}/>
            <div><button onClick={plus}>+</button></div>
        </div>
    );
}

export { Counter };
