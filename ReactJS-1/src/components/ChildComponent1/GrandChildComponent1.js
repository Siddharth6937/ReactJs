import React from "react";

const GrandChildComponent1 = (props) => {
    return (
        <div className="GrandChildComponent1">
            <h3>{props.heading}</h3>
            <p>{props.discription && ("Description goes here :- " +props.discription)}
            </p>
        </div>
    )
}

export default GrandChildComponent1;

/*
Conditional Rendering - control rendering of jsx based on a particular condtion 
(with && operator)
*/

/*
Conditional Rendering - control rendering of jsx based on a particular condtion 
(with && operator)
*/