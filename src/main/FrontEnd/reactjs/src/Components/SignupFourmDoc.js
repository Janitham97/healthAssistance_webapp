import React, {Component} from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from 'axios'


class SignupFourmDoc extends Component{
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            nic:'',
            password:'',
            conpassword:''
        };
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    mySubmitHandler = (event) =>{

        let nic = this.state.nic;
        let pass = this.state.password;
        let pass1 = this.state.conpassword;
        let valnic =RegExp(/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/)

        if (nic != valnic){
            alert("NIC not formatted")
        }

        if (pass != pass1) {
            alert("password should be match");
        }
    }




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
                                <Form onSubmit={this.mySubmitHandler} id="DocRegForm">
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formfirstname">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control
                                                required
                                                type="test"
                                                name="firstname"
                                                placeholder="Enter First Name"
                                                onChange={this.myChangeHandler}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formlastname">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control required
                                                          type="text"
                                                          name="lastname"
                                                          placeholder="Enter Last Name"
                                                          onChange={this.myChangeHandler}/>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formnic">
                                            <Form.Label>NIC</Form.Label>
                                            <Form.Control required
                                                          type="test"
                                                          name="nic"
                                                          placeholder="Enter Your NIC"
                                                          onChange={this.myChangeHandler}/>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formlocation">
                                            <Form.Label>Location</Form.Label>
                                            <Form.Control required
                                                          type="test"
                                                          name="location"
                                                          placeholder="Enter Your Near City"
                                                          onChange={this.myChangeHandler}/>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formpassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control required
                                                          type="password"
                                                          name="password"
                                                          placeholder="Enter New Password"
                                                          onChange={this.myChangeHandler}/>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formconpassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control required
                                                          type="password"
                                                          name="conpassword"
                                                          placeholder="Confirm Your Password"
                                                          onChange={this.myChangeHandler}/>
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