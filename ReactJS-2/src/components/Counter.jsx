import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            count :  0
        }
    }

    increment = () => {

        this.setState( prevState => ({
            count : prevState.count + 1
        }))
    }

    decrement = () => {
        this.setState({
            count : this.state.count - 1
        })
    }

    increcement5 = () =>{
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        }


        render() {
        return (
            <div > 
                <h1 style={{fontSize :'5em', margin:'0px'}} >Counter {this.state.count}</h1>
                <button style={{fontSize :'2em', margin : ' 0 0 0 0'}} onClick={this.increment}>Incremenet</button>
                <button style={{fontSize :'2em'}} onClick={this.increcement5}>Increment by 5 </button>

                <br />
                <button style={{fontSize :'2em'}} onClick={this.decrement}>Decrement</button>
            </div>

        )
    }

}



export default Counter