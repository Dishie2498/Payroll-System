import './PersonalDetails.css';
const PersonalDetails = () => {
    return ( 

        <div class="main-block">
           
        <form action="/">
            

            <fieldset>
                <legend>
                    <h3>Personal Details</h3>
                </legend>
                <div class="personal-details">
                    <div>
                        <div><label>Full Name</label><input type="text" name="name" required/></div>
                        <div><label>Phone No</label><input type="text" name="name" required/></div>
                        <div>
                            <label>Blood Group</label>
                            <select>
                                <option value="Please Select">Please Select</option>
                                <option value="a-">A-</option>
                                <option value="a+">A+</option>
                                <option value="ab-">AB-</option>
                                <option value="ab+">AB+</option>
                                <option value="b-">B-</option>
                                <option value="b+">B+</option>
                                <option value="o-">O-</option>
                                <option value="o+">O+</option>
                            </select>

                        </div>
                        <div><label>Marital Status</label>
                            <select>
                                <option value="Please Select">Please select</option>
                                <option value="married">Married</option>
                                <option value="unmarried">Unmarried</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        
                        <div>
                            <label>Religion</label>
                            <select>
                                <option value="Please Select">Please select</option>
                                <option value="Buddhist">Buddhist</option>
                                <option value="Christian">Christian</option>
                                <option value="Jain">Jain</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Muslim">Muslim</option>
                                <option value="Sikh">Sikh</option>
                                <option value="Parsi">Parsi</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div><label>Physically Handicapped</label>
                            <select>
                                <option value="please select">Please Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Gender</label>
                            <div class="gender">
                                <input type="radio" value="none" id="male" name="gender" required />
                                <label for="male" class="radio">Male</label>
                                <input type="radio" value="none" id="female" name="gender" required />
                                <label for="female" class="radio">Female</label>
                            </div>
                        </div>
                        <div class="birthdate">
                            <label for="birth">Date Of Birth</label>
                            <input type="date" id="birth" name="birth" />
                        </div>
                            
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>
                    <h3>Professional Details</h3>
                </legend>
                <div class="professional-details">
                <div><label>Employee ID</label><input type="text" name="name" required/></div>
                <div>
                    <label>Faculty Type</label>
                    <select required>
                        <option value="Please Select">Please Select</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Contract Based">Contract Based</option>
                        <option value="Visiting Faculty">Visiting Faculty</option>
                    </select>
                </div>
                
                <div>
                    <label>Staff Type</label>
                    <select required>
                        <option value="Please Select">Please Select</option>
                        <option value="class1">Class1</option>
                        <option value="class2">Class2</option>
                        <option value="class3">Class3</option>
                        <option value="class4">Class4</option>
                    </select>
                </div>
                <div>
                    <label for="joining">Date Of Joining</label>
                    <input type="date" id="joining" name="joining"/>
                </div>
            </div>
            </fieldset>
            
            <button type="submit" className='detailsubmit' href="/">Submit</button>
            
        </form>
    </div>

     );
}
 
export default PersonalDetails;
   