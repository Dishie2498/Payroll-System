
const Login = () => {
    return ( 
        <div className="login">
            <h1>Login</h1>
            <form>
            <div className="userbox">
            <label htmlFor="mail"></label>
            <input type="text" name="mail" id="mail" placeholder="Employee ID" required/>
            </div>
            <div className="userbox">
                <label htmlFor="password"></label>
            <input type="password" name="password" id="password" placeholder="Password"  required />
            </div>
            
            <button id="loginsubmit">Submit</button>
            
            </form>

        </div>
     );
}
 
export default Login;