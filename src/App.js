import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
        </Switch>
      </div>      
    </div>
    </Router>
   
  );
}

export default App;
