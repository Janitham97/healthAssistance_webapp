import React, {Component} from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class SignupFormPatient extends Component{
    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col><Card style={{ width: '30rem' }}>
                            <Card.Body>
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="email" placeholder="Enter First Name" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="password" placeholder="Enter Last Name" />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>NIC</Form.Label>
                                            <Form.Control type="email" placeholder="Enter Your NIC" />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Location</Form.Label>
                                            <Form.Control type="email" placeholder="Enter Your Near City" />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="email" placeholder="Enter New Password" />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="text" placeholder="Confirm Your Password" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Row>
                                        <Col><Button variant="info" type="submit">
                                            Signup as Patient
                                        </Button></Col>
                                        <Col> <Button as={Link} to="/" variant="danger" type="submit">
                                            Back
                                        </Button></Col>
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

export default SignupFormPatient;