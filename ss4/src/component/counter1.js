import {UseIncrement} from "./UseIncrement";
export function Counter1() {
    const [count,increase]=UseIncrement(1);
    return(
        <>
            <h2>Count :{count} </h2>
            <button onClick={increase}>Add 1</button>
        </>
    )

}