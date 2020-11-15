import React, {Component} from "react";
import {Row,Col,Card,Button,CardGroup,CardDeck,Container} from "react-bootstrap";


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
                                <Button variant="success">Signup as Doctor</Button>
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
                                <Button variant="info">Signup as Patient</Button>
                            </Card.Body>

                        </Card>
                    </CardDeck>
                </Container>
            </div>
        );
    }
}
export default Signup;