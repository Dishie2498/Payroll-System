// sfc creates this boilerplate
import { Link } from "react-router-dom";
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Basic Page</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>

            </div>
        </nav>
        

    );
}
 
export default Navbar;