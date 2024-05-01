import './childComponent1.css'
import React from "react";
import GrandChildComponent1 from './GrandChildComponent1';

const ChildCompoent1 = () => {

    return (
        <div className="ChildCompoent1" style={{ background: '#eee', color: 'red' }}>
            <h2>Child Compoent 1</h2>
            <GrandChildComponent1
                heading="Heading 1"
                discription="I am the content of 1st heading"
            />

            <GrandChildComponent1
                heading="Heading 2"
                discription="I am the content of 2nd heading"
            />
        </div>
    )
}

export default ChildCompoent1;