import { useState } from "react";

let counterApp = () => {
    let [count, setcount] = useState(0);
    let handleOnInc = () =>{
        setcount(count+1);
    }
    
    let handleOnDec = () =>{
        setcount(count-1);
    }

    let handleOnReset = () => {
        setcount(0);
    }
    return(
        <div>
            <h1>Counter App</h1>
            <p>point:{count}</p>
            <button onClick={handleOnInc}>Increment</button>
            <button onClick={handleOnDec}>Decrement</button>
            <button onClick={handleOnReset}>Reset</button>
        </div>
    )
}
export default counterApp;