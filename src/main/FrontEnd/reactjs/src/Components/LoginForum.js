import React, {Component} from "react";
import {Form, Button, Container, Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

class LoginForum extends Component{
    render() {

        return(
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col><Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>NIC</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Your NIC" />
                                        <Form.Text className="text-muted">
                                            We'll never share your data with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <Row>
                                        <Col><Button variant="primary" type="submit">
                                            Login
                                        </Button></Col>
                                        <Col> <Button as={Link} to="/" variant="danger" type="submit">
                                            Back
                                        </Button></Col>
                                        <Col></Col>
                                    </Row>

                                </Form>
                            </Card.Body>
                        </Card></Col>
                        <Col></Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default LoginForum;