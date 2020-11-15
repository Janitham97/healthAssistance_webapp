import './App.css';
import NavigationBar from "./Components/NavigationBar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <br/>
      <br/>
      <br/>
      <Signup/>
      <br/>
      <br/>
      <Login/>
    </div>
  );
}

export default App;
