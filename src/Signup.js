const Signup = () => {
    return ( 
        <div>

        <div className="Vjtilogo"> 
                <img src="vjti-logo.png" alt="VJTI" />
                <hr />
        </div>
        <div className="welcome">
            <h3>Welcome to VJTI Payroll Portal</h3>
        </div>

        <div className="signup">
            <h1>SignUp</h1>
            <form >
            <div className="splitleft">
                <div className="userbox">
                    <label htmlFor="fullname"></label>
                    <input type="text" name="fullname" id="fullname" placeholder="Full Name" />
                </div>
                <div className="userbox">
                    <label htmlFor="username"></label>
                    <input type="text" name="username" id="username" placeholder="Username" required />   
                </div>
                <div className="userbox">
                    <label htmlFor="empid"></label>
                    <input type="text" name="empid" id="empid" placeholder="Employee" required/>
                </div>
            </div>
            <div className="splitright">
                <div className="userbox">
                    <label htmlFor="mail"></label>
                    <input type="email" name="mail" id="mail" placeholder="Email" required/>
                </div>
                <div className="userbox">
                    <label htmlFor="password"></label>
                    <input type="password" name="password" id="password" placeholder="Password" minLength="8" maxLength="14" required/>
                 </div>
                <div className="userbox">
                    <label htmlFor="contact"></label>
                    <input type="text" name="contact" id="contact" placeholder="Phone Number" />
                </div>
            </div>
            <div className="buttonsignup">
            <button>Submit</button>
            </div>
            </form>

        </div>
        </div>
        
     );
}
 
export default Signup;