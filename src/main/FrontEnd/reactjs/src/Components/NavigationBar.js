import React, {Component} from 'react'
import {Navbar,Nav} from "react-bootstrap";


class NavigationBar extends Component{
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Health Assistance App</Navbar.Brand>
                    
                </Navbar>

            </div>
        );
    }
}

export default NavigationBar;