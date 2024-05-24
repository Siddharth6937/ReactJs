import React, { Component } from "react";
import { Container, Form, Col, InputGroup, Button, ListGroup, Row } from 'react-bootstrap';
import './Todo.css'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputToDo : "",
            toDoList: [
                "Revise Asynchronous Javascript",
                "Practice Array Method Question",
                "Revise React components and props",
                "Revise React States"
            ]
        }
    }

    render() {
        const {inputToDo, toDoList } = this.state;
        return (
            <Container style={{ margin: '20px auto' }}>
                <Col md={{ span: 4, offset: 4 }}>
                    <InputGroup className="mb-3">
                        <Form.Control size="lg" type="text" value={inputToDo} onChange={(e) =>this.setState({inputToDo : e.target.value}) } placeholder="Enter To-Do" />

                        <Button variant="outline-success" id="button-addon1" onClick={() =>{ this.setState((prevState) => ({
                            toDoList : [...prevState.toDoList , inputToDo]
                        }))} }>
                            +
                        </Button>


                    </InputGroup>
        
                    <ListGroup className="to-do-list">
                    {toDoList.map((todo, index)=> (
                        <ListGroup.Item  key={index}>
                            <Row>
                                <Col md={9}>{todo}</Col>
                                <Col md={3} className="action-btns">
                                    {" "}
                                    <Button variant="warning" size="sm"><FiEdit /></Button>
                                    <Button variant="danger" size="sm"><RiDeleteBin5Fill /></Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}

                    </ListGroup>

                </Col>
            </Container>
        )
    }
}

export default Todo;