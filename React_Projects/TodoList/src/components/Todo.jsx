import React, { Component } from "react";
import { Container, Form, Col, InputGroup, Button, ListGroup, Row } from 'react-bootstrap';
import './Todo.css'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputToDo: "",
            toDoList: [],
            isEditing : false,
            editingIndex : ''
        }
    }
    addOrUpdateToDo () {
        const {inputToDo, isEditing, editingIndex} = this.state;
        if(inputToDo){
            if(isEditing){
                this.setState((prevState) =>({
                    toDoList: prevState.toDoList.map((todo, index) => {
                        if(index ===  editingIndex){
                            todo = inputToDo
                        }
                            return todo
                    })
                }))
            } else {
                this.setState((prevState) => ({
                   toDoList: [...prevState.toDoList, inputToDo],
                   inputToDo : "",
                }))
            }
        }
    }

    delteToDo = (inputIndex) => {
        this.setState((prevState) => ({
            toDoList: prevState.toDoList.filter((todo, index) => index !== inputIndex)
        }))
    }

    editToDo(inputIndex) {
        this.setState((prevState) => ({
            inputToDo: prevState.toDoList[inputIndex],
            isEditing : true,
            editingIndex : inputIndex
        }))

    }

    render() {
        const { inputToDo, toDoList, isEditing } = this.state;
        return (
            <Container style={{ margin: '20px auto' }}>
                <Col md={{ span: 4, offset: 4 }}>
                    <InputGroup className="mb-3">
                        <Form.Control size="lg" type="text" value={inputToDo} onChange={(e) => this.setState({ inputToDo: e.target.value })} placeholder="Enter To-Do" />

                        <Button variant="outline-success" id="button-addon1" onClick={() => { this.addOrUpdateToDo() }}>
                            {isEditing ? <FaRegCheckCircle /> : <FaPlus /> }
                        </Button>


                    </InputGroup>

                    <ListGroup className="to-do-list">
                        {toDoList.map((todo, index) => (
                            <ListGroup.Item key={index}>
                                <Row>
                                    <Col md={9}>{todo}</Col>

                                    <Col md={3}
                                        className="action-btns"
                                    >
                                        {" "}
                                        <Button
                                            variant="warning"
                                            size="sm"
                                            onClick={() => {this.editToDo(index)}}
                                            > <FiEdit /></Button>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => { this.delteToDo(index) }}
                                        > <RiDeleteBin5Fill /></Button>
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