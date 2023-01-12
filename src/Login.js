const Login = () => {
    return ( 
        <div className="login">
            <h1>Login</h1>
            <form>
            <div>
            <label htmlFor="mail">Email</label>
            <input type="email" name="mail" id="mail" placeholder="Email" required/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" placeholder="Password" />
            </div>
            <div>
                <button>Submit</button>
            </div>
            </form>

        </div>
     );
}
 
export default Login;