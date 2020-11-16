import './App.css';
import NavigationBar from "./Components/NavigationBar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Container} from "react-bootstrap";
import LoginForum from "./Components/LoginForum";
import SignupFourm from "./Components/SignupFourm";

function App() {
  return (
    <Router>
        <NavigationBar/>
        <Container>
            <br/>
            <br/>
            <br/>
            <Signup/>
            <br/>
            <br/>
            <Login/>
        </Container>
            <Switch>
                <Route path="/home"  exact component={SignupFourm}/>
                <Route path="/login" exact component={LoginForum}/>
            </Switch>


    </Router>
  );
}

export default App;
