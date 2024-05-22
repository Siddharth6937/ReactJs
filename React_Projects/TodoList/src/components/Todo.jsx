import React, { Component } from "react";
import { Container, Form, Col, InputGroup, Button, ListGroup, Row } from 'react-bootstrap';
import './Todo.css'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [
                "Revise Asynchronous Javascript",
                "Practice Array Method Question",
                "Revise React components and props",
                "Revise React States"
            ]
        }
    }

    render() {
        const { todoList } = this.state;
        return (
            <Container style={{ margin: '20px auto' }}>
                <Col md={{ span: 4, offset: 4 }}>
                    <InputGroup className="mb-3">
                        <Form.Control size="lg" type="text" placeholder="Enter To-Do" />

                        <Button variant="outline-success" id="button-addon1">
                            +
                        </Button>


                    </InputGroup>
        
                    <ListGroup className="to-do-list">
                    {todoList.map(todo => (
                        <ListGroup.Item>
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