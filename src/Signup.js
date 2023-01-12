const Signup = () => {
    return ( 
        <div className="signup">
            <h1>SignUp</h1>
            <form >
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="username" required />
              
            </div>
            <div>
            <label htmlFor="mail">Email</label>
                <input type="email" name="mail" id="mail" placeholder="Email" required/>
                
            </div>
            <div>
            <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" placeholder="Password" minLength="8" maxLength="14" required/>
            </div>
            <button>Submit</button>
            </form>

        </div>
        
     );
}
 
export default Signup;