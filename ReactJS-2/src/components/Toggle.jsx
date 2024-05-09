import React from "react";

class Toggle extends React.Component {
    constructor(props){
        super(props)

        this.state = {
           showTitle : true,
        }
    }

    toggleHeading = () => {
        this.setState((prevState) => ({
            showTitle:!prevState.showTitle
        }))
    }


    render() {
        let {showTitle} = this.state;
        return (
            
            <div>
                {showTitle && (<h1>Bulb On Off</h1>)}
                <button onClick={this.toggleHeading}>Toggle</button>
            </div>
        )
    }
}

export default Toggle;