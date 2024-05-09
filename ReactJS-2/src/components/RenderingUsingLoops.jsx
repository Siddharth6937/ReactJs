import React from "react";

class RenderingUsingLoops extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            students: [
                {
                    name: "Siddharth",
                    batch: 10,
                    country: "India"
                },
                {
                    name: "Priyanka",
                    batch: 10,
                    country: "India"
                },
                {
                    name: "Shagun",
                    batch: 11,
                    country: "Austrila"
                },
                {
                    name: "Piku",
                    batch: 11,
                    country: "Bokaro"
                },
                {
                    name: "pooja",
                    batch: 9,
                    country: "Bokaro"
                },
                {
                    name: "preeti Singh",
                    batch: 9,
                    country: "Sounda"
                }
            ]
        }

    }

    render() {
        const{students} = this.state
        return (
            <div>
                <h2>Rendering Using Loops </h2>



                <>
                    {
                        students.map((student, index) => (

                            <div style={{
                                display: "flex",
                                justifyContent: 'space-around',
                                border: "1px solid black",
                                margin: "10px",
                                padding: " 10px"
                            }}
                            key={index}
                            >
                                <h1>{student.name}</h1>
                                <h1>{student.batch}</h1>
                                <h1>{student.country}</h1>
                            </div>
                        ))}
                </>

            </div>
        )
    }
}

export default RenderingUsingLoops;