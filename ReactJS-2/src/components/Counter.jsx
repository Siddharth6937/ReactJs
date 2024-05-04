import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            increment :  1
        }
    }

    increment = () => {
        this.setState({
            increment : 1 + 1
        })
    }

    render() {
        return (
            <>
                <h1>Counter {this.state.increment}</h1>
                <button onClick={this.increment}>Incremenet</button>
            </>

        )
    }
}


export default Counter