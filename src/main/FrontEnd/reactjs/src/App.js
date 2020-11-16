import './App.css';
import NavigationBar from "./Components/NavigationBar";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import LoginForum from "./Components/LoginForum";
import SignupFourmDoc from "./Components/SignupFourmDoc";
import Home from "./Components/Home";
import SignupFormPatient from "./Components/SignupFormPatient";

function App() {
  return (
    <Router>
        <NavigationBar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signupDoc"  exact component={SignupFourmDoc}/>
                <Route path="/signupPatient" exact component={SignupFormPatient}/>
                <Route path="/login" exact component={LoginForum}/>
            </Switch>


    </Router>
  );
}

export default App;
