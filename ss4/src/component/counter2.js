import {UseIncrement} from "./UseIncrement";
export function Counter2() {
    const [count,increase]=UseIncrement(2);
    return(
        <>
            <h2>Count :{count} </h2>
            <button onClick={increase}>Add 2</button>
        </>
    )

}