
import Login from "./Login";

import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="vjtiintro">
            <div className="Vjtilogo"> 
                <img src="vjti-logo.png" alt="VJTI" />
                <hr />
            </div>
        <div className="welcome">
            <h3>Welcome to VJTI Payroll Portal</h3>
        </div>

        <div className="loginlink">
            <Login></Login>
        </div>
        <div className="signuplink">

            <Link to="/signup" style={{textDecoration:'none'}}>New Employee? Signup</Link>
        </div>
            

        
        
        
        </div>

        
     );

    
}
 
export default Home;