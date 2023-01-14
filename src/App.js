import Navbar from './Navbar';

import Signup from './Signup';
import Home from './Home';
import AfterLogin from './AfterLogin';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import PersonalDetails from './PersonalDetails';
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
          <Route exact path="/signup">
            <Signup></Signup>
          </Route>
          <Route exact path="/profile">
            <AfterLogin></AfterLogin>
          </Route>
          <Route exact path="/details">
            <PersonalDetails></PersonalDetails>
          </Route>
        </Switch>
      </div>      
    </div>
    </Router>
   
  );
}

export default App;
