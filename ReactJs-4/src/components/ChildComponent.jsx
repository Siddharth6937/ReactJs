import { useEffect } from "react";

const ChildComponents = () => {

    useEffect(() => {
        console.log("[ChildComponent] component Mount")
    }, [])

    useEffect(() => {
        return () => {
            console.log("[ChildComponent] component will unmounted")
        }

    }, [])

    return (
        <div>Child Component</div>
    )
}

export default ChildComponents;