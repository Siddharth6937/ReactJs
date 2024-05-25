import ChildComponents from "./ChildComponent";
import { useState, useEffect } from "react";

const ParentComponent = () => {

    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        console.log("[ParentComponent] component Mount")
    }, [])

    useEffect(() => {
        console.log("[ParentComponent] component Updated")
    }, [count, show])

    return (
        <>
            <div>Parent Component</div>
            <h2>{count}</h2>
            <button onClick={() =>
                setCount((prevCount) => prevCount + 1)}>Increment</button> <br />

            {show && (<ChildComponents />)}
            <button onClick={() =>
                setShow((prevShow) => !prevShow)}>Hide/Show</button>


        </>
    )
}

export default ParentComponent;

/*     useEffect(() =>{
        
    }, [])
    first arrgument is call back function
    second argument is dependency array (To triger callback whenever callback whenever any state inside dependency array changes)


    useEffect hook can be used like all 3 life cycle methods in functional components:-
    1. componentDidMount  (Dependancy array is empty)
        useEffect(() => {

        }, [])

    2. componentDidUpdate
        useEffect(() => {

        }, [state1, state2])

    3. componentWillUnmount
        useEffect(() =>{
            return () => {
                console.log("[ParentComponent] component will unmounted")
            }
    }, [])
*/