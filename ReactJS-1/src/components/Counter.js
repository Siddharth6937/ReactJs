import React from "react";

const Counter = () => {
    const increase = () =>{
        console.log(0+1);
    }


    return (
        <div>
            <h1> Counter </h1>
            <p style={{fontSize : "10em", margin:"0"}}> 0 </p>
            <button onClick={increase} >Increase</button>
        </div>
    )
}

export default Counter