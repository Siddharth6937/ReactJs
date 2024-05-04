import React from "react";

class HelloClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            batchNo : 10,
            country : "India",
        }
        this.changeBatchNo = this.changeBatchNo.bind(this);
        this.changeCountry = this.changeCountry.bind(this);
    }

    changeBatchNo(){
        this.setState({
        batchNo : 9
        })

    }

    changeCountry(){
        this.setState({
            country : "Austrila"
            })
    }

    render() {
        const {student1, student2 } = this.props
        const { batchNo , country} = this.state;
        return (
            <>
            <h1>Hello {student1} {student2 && `and ${student2}`} </h1>
            <h1>Batch No :- {batchNo}</h1>
            <h1>Counrty Name :- {country}</h1>
            <button onClick={this.changeBatchNo} >Change batch No</button>
            <button onClick={this.changeCountry} >Change Country</button>
            </>
        )
    }
}

export default HelloClass;