import React, {Component} from "react";
import Login from "./Login";
import Signup from "./Signup";
import {Container} from "react-bootstrap";

class Home extends Component{
    render() {
        return (
            <div>
                <Container>
                    <br/>
                    <br/>
                    <br/>
                    <Signup/>
                    <br/>
                    <br/>
                    <Login/>
                </Container>
            </div>
        );
    }
}

export default Home;