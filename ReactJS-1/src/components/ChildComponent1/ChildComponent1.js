import './childComponent1.css'
import React from "react";
import GrandChildComponent1 from './GrandChildComponent1';

const ChildCompoent1 = () => {

    return (
        <div className="ChildCompoent1" style={{ background: '#eee' }}>
            <h2>Child Compoent 1</h2>
            <GrandChildComponent1
                title="Heading 1"
                discription="I am the content of 1st heading"
                backgroundColor= "red"
                width="50%"
                margin = "10px auto"
                padding = "10px"
             />

            <GrandChildComponent1
                title="Heading 2"
                discription=""
                backgroundColor= "blue"
                width="50%"
                margin = "10px auto"
                padding = "10px"
            />
        </div>
    )
}

export default ChildCompoent1;