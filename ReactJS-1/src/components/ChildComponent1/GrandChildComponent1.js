import React from "react";
import './GrandChildComponent1.css'

const GrandChildComponent1 = ({title , discription, backgroundColor}) => {
    return (
        <div 
        className="GrandChildComponent1"
        style={{backgroundColor : backgroundColor
        }}
        >
            <h3>{title}</h3>
            <p>{discription && ("Description goes here :- " +discription)}
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