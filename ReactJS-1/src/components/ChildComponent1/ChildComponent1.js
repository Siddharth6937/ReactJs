import React from "react";
import GrandChildComponent1 from "./ChildComponent1";
import './childComponent1.css'
const ChildComponent1 = () => {
        
       // Internal CSS 
    // let maindivStyle = {
    //     backgroundColor : '#eee', color : 'red'

    // }
    return (
        <div 
        className="ChildComponent1"
        
        >
        <h2>Child Component 1</h2>
        <GrandChildComponent1 />
        </div>
    )
}

export default ChildComponent1