import React from "react";

class BulbOnOff extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            bulbStatus : false
        }
    }

    toggleBulb = () => {
        this.setState((prevState) => ({
            bulbStatus : !prevState.bulbStatus
        }))
    }

    render(){
        let{bulbStatus} = this.state
        return (
            <>
            <img src={bulbStatus ? "https://www.w3schools.com/js/pic_bulboff.gif" : "https://www.w3schools.com/js/pic_bulbon.gif"  } height='500px' alt="bulb" />
            <br />
            <br />
            <button 
            onClick={this.toggleBulb}
            style={{padding:'10px 20px', margin:'20px'}}
            > Toggle Bulb</button>
            </>

        )
    }
}

export default BulbOnOff;