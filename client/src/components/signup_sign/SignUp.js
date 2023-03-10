import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [udata, setUdata] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    cpassword:""
  });

  

  const updata = (e) => {
    const { name, value } = e.target;

    setUdata(() => {
      return {
        ...udata,
        [name]: value,
      };
    });
    
  };

  console.log(udata);

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./blacklogoamazon.png" alt="amazonlogo" />
        </div>
        <div className="sign_form">
          <form>
            <h1>Creat Account</h1>
            <div className="form_data">
              <label htmlFor="">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={updata}
                value={udata.name}
              />
            </div>
            <div className="form_data">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={updata}
                value={udata.email}
              />
            </div>
            <div className="form_data">
              <label htmlFor="">Mobile Number</label>
              <input
                type="Number"
                onChange={updata}
                value={udata.number}
                name="number"
                id="number"
              />
            </div>
            <div className="form_data">
              <label htmlFor="">Password</label>
              <input
                type="Password"
                name="password"
                onChange={updata}
                value={udata.password}
                placeholder="At-least 8 Characters"
                id="password"
              />
            </div>
            <div className="form_data">
              <label htmlFor="">Re Enter Password</label>
              <input
                type="password"
                name="cpassword"
                onChange={updata}
                value={udata.cpassword}
                id="cpassword"
              />
            </div>
            <button className="signin_btn">Sign Up</button>
            <hr></hr>
            <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to="/login">Sign-in</NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
