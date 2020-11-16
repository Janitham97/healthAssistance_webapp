import React, {Component} from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class SignupFourmDoc extends Component{

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
                                <Form onSubmit={this.submitDoc} id="DocRegForm">
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formfirstname">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control required type="test" name="fisrtname" value={this.state.firstname} onChange={this.docChange} placeholder="Enter First Name" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formlastname">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control required type="text" name="lastname" placeholder="Enter Last Name" />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formnic">
                                            <Form.Label>NIC</Form.Label>
                                            <Form.Control required type="test" name="nic" placeholder="Enter Your NIC" />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formlocation">
                                            <Form.Label>Location</Form.Label>
                                            <Form.Control required type="test"  name="location" placeholder="Enter Your Near City" />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formpassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control required type="password" name="password" placeholder="Enter New Password" />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formconpassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control required type="password" name="conpassword" placeholder="Confirm Your Password" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Row>
                                        <Col><Button variant="success" type="submit">
                                            Signup as Doctor
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

export default SignupFourmDoc;