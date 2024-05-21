import React, {Component} from "react";

class ChildComponent1 extends Component{
    constructor(props){
        super(props);

        console.log("I am child constructor");
    }

    componentDidMount(){
        console.log("[Child] component Did Mount");
        console.log("[Child] ----------------component Did Mount is Finished-----------");
      }

    componentWillUnmount(){
        console.log(" [Child] component Will Unmount");
        console.log(" [Child] ----------------component Will Unmount is Finished-----------");
      }

    render(){
        return(

            <h2>Child Component 1</h2>
           
        )
    }
}

export default ChildComponent1;