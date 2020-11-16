import React, {Component} from "react";
import {Button, Card, CardDeck, Container} from "react-bootstrap";
import {Link} from "react-router-dom";


class Login extends Component{
    render() {
        return(
            <div>
                <Container>
                    <CardDeck>
                        <Card border="success" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Exist Doctor</Card.Title>
                                <br/>
                                <Card.Text>
                                    Already registered
                                    let's login for use the system
                                </Card.Text>
                                <br/>
                                <Button as={Link} to="/login" variant="success">Login as Doctor</Button>
                            </Card.Body>

                        </Card>
                        <Card border="info" style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>Exist Patient</Card.Title>
                                <br/>
                                <Card.Text>
                                    Already registered
                                    let's login for use the system
                                </Card.Text>
                                <br/>

                                <Button  as={Link} to="/login" variant="info">Login as Patient</Button>
                            </Card.Body>

                        </Card>
                    </CardDeck>
                </Container>

            </div>
        );
    }
}

export default Login;