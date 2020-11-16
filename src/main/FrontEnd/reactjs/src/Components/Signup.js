import React, {Component} from "react";
import {Row,Col,Card,Button,CardGroup,CardDeck,Container} from "react-bootstrap";
import {Link} from "react-router-dom";


class Signup extends Component{
    render() {
        return (
            <div>

                <Container>
                    <CardDeck>
                        <Card border="success" style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>New Doctor</Card.Title>
                                <Card.Text>
                                   Looking for a signup to brand new system
                                    let's take a bit time and register for the system.
                                </Card.Text>
                                <br/>
                                <Button as={Link} to="/signupDoc" variant="success">Signup as Doctor</Button>
                            </Card.Body>

                        </Card>
                        <Card border="info" style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>New Patient</Card.Title>
                                <Card.Text>
                                    Looking for a signup to brand new system
                                    let's take a bit time and register for the system.
                                </Card.Text>
                                <br/>
                                <Button as={Link} to="/signupPatient" variant="info">Signup as Patient</Button>
                            </Card.Body>

                        </Card>
                    </CardDeck>
                </Container>
            </div>
        );
    }
}
export default Signup;