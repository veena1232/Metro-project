// import React, { useState } from 'react';
// import axios from 'axios';
// import "../styles/signupstyles.css";
// import { FaUserCircle } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: '',
//     repassword: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { firstname, lastname, email, password, repassword } = formData;

//     const data = {
//       firstname: firstname,
//       lastname: lastname,
//       email: email,
//       password: password,
//       repassword: repassword
//     };

//     try {
//       const response = await axios.post('http://localhost:5000/signup', data);
//       const { status, firstname } = response.data;
//       const userData = {
//         username: firstname,
//         stat: true,
//       };
//       if(status == "loginSuccess"){
//         navigate("/", { state: userData });
//         console.log("ok")
        
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className='signup-div'>
//     <FaUserCircle className='user-logo'/>
//     <form className="form" onSubmit={handleSubmit}>
//       <label className='label-1'>
//         <input className='tpw' type="text" placeholder='First Name' name="firstname" value={formData.firstname} onChange={handleChange} />
//       </label>
//       <br />
//       <label className='label-1'>
//         <input className='tpw' type="text" placeholder='Last Name' name="lastname" value={formData.lastname} onChange={handleChange} />
//       </label>
//       <br />
//       <label className='label-1'>
//         <input className='tpw' type="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange} />
//       </label>
//       <br />
//       <label className='label-1'>
//         <input className='tpw' type="password" placeholder='Password' name="password" value={formData.password} onChange={handleChange} />
//       </label>
//       <br />
//       <label className='label-1'>
//         <input className='tpw' type="password" placeholder='Confirm Password' name="repassword" value={formData.repassword} onChange={handleChange} />
//       </label>
//       <br />
//       <div className='clickheresignup'>
//       <p>Have an accoount<a href='/login'>Click here</a></p>
//       </div>
//       <button className='log-sub' type="submit">Signup</button>
//     </form>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import axios from 'axios';
import logo2 from "./Images/card1.jpg"
import "../styles/loginstyles.css";

function Signup() {
  const [formData, setFormData] = useState({
    email_id: '',
    password: '',
    re_password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);
    if (formData.password !== formData.re_password) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData);

      if(response === 'password not matched'){
        alert("passwords are not matched");
      }

      if (response.status === 200) {
        alert('Signup successful');
        // Redirect or navigate to a login page
      }
    } catch (error) {
      console.error('Error signing up:', error);
      if (error.response) {
        alert(`Signup failed: ${error.response.data}`);
      } else {
        alert('Error signing up');
      }
    }
  };

  return (
    <div>
      <div className='row mt-70 align-items-center justify-content-center '>
        <div className='col-8 border-body'>
          <div className='row'>
            <div className='col-6 pl-0'>
              <img src={logo2} alt='logo 2 is here' width={480} height={400}></img>
            </div>
            <div className='col-6 '>
              <form className='ml-30' onSubmit={handleSubmit}>
                <h2 className='font-weight-20 mb-30 mt-3'>Sign up</h2>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="emailInput"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    name="email_id"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    id="passwordInput"
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                    name="password"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="password"
                    id="passwordInput"
                    className="form-control form-control-lg"
                    placeholder="Enter your password again"
                    name="re_password"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="text-center text-lg-start mt-1 pt-2">
                  <button className="sub">Signup</button>
                  <p className="small fw-bold pt-1 mb-0 mt-1 ml-30">
                    Already have an account? <a href="/login" className="link-danger">Login</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
