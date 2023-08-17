// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import "../styles/loginstyles.css";
// import { useNavigate } from 'react-router-dom';
// import { FaUserCircle } from 'react-icons/fa';
// import logo2 from "./Images/card1.jpg"


// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [unf, setUnf] = useState(false);
//   const [ip, setip] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { email, password } = formData;

//     try {
//       const response = await axios.post('http://localhost:5000/login', { email, password });
//       if(response.data=="userNotFound"){
//         setUnf(true);
//       }
//       else if(response.data == "invalidPassword"){
//         setip(true);
//       }
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
//       console.error("err:"+error);
//     }
//   };

//   return (
//     <section class="vh-100">
//   <div class="container-fluid h-custom">
//     <div class="row d-flex justify-content-center align-items-center h-100">
//       <div class="col-md-6 col-lg-6 col-xl-5">
//         <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//           class="img-fluid" alt="Sample image"/>
//       </div>
//       <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//         <form>
//           <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
//             <p class="lead fw-normal mb-0 me-3">Sign in with</p>
//             <button type="button" class="btn btn-primary btn-floating mx-1">
//               <i class="fab fa-facebook-f"></i>
//             </button>

//             <button type="button" class="btn btn-primary btn-floating mx-1">
//               <i class="fab fa-twitter"></i>
//             </button>

//             <button type="button" class="btn btn-primary btn-floating mx-1">
//               <i class="fab fa-linkedin-in"></i>
//             </button>
//           </div>

//           <div class="divider d-flex align-items-center my-4">
//             <p class="text-center fw-bold mx-3 mb-0">Or</p>
//           </div>

//           <div class="form-outline mb-4">
//             <input type="email" id="form3Example3" class="form-control form-control-lg"
//               placeholder="Enter a valid email address" />
//             <label class="form-label" for="form3Example3">Email address</label>
//           </div>

//           <div class="form-outline mb-3">
//             <input type="password" id="form3Example4" class="form-control form-control-lg"
//               placeholder="Enter password" />
//             <label class="form-label" for="form3Example4">Password</label>
//           </div>

//           <div class="d-flex justify-content-between align-items-center">
//             <div class="form-check mb-0">
//               <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
//               <label class="form-check-label" for="form2Example3">
//                 Remember me
//               </label>
//             </div>
//             <a href="#!" class="text-body">Forgot password?</a>
//           </div>

//           <div class="text-center text-lg-start mt-4 pt-2">
//             <button type="button" class="btn btn-primary btn-lg"
//               // style="padding-left: 2.5rem; padding-right: 2.5rem;"
//               >Login</button>
//             <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
//                 class="link-danger">Register</a></p>
//           </div>

//         </form>
//       </div>
//     </div>
//   </div>
//   <div
//     class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
//     <div class="text-white mb-3 mb-md-0">
//       Copyright © 2020. All rights reserved.
//     </div>

//     <div>
//       <a href="#!" class="text-white me-4">
//         <i class="fab fa-facebook-f"></i>
//       </a>
//       <a href="#!" class="text-white me-4">
//         <i class="fab fa-twitter"></i>
//       </a>
//       <a href="#!" class="text-white me-4">
//         <i class="fab fa-google"></i>
//       </a>
//       <a href="#!" class="text-white">
//         <i class="fab fa-linkedin-in"></i>
//       </a>
//     </div>
    
//   </div>
// </section>
    // <div>
    //   <div className='row mt-70 align-align-items-center justify-content-center '>
    //     <div className='col-8 border-body'>
    //       <div className='row'>
    //         <div className='col-6 pl-0'>
    //           <img src={logo2} alt='logo 2 is here' width={480} height={400}></img>
    //         </div>
    //         <div className='col-6 '>          
    //         <form className='ml-30'>
    //        {/* <div class="d-flex flex-row align-items-center justify-content-center mt-20">
    //          <p class="lead fw-normal mb-0 me-3">Sign in with</p>
    //          <button type="button" class="btn btn-primary btn-floating mx-1">
    //            <i class="fab fa-facebook-f"></i>
    //          </button>
    //          <button type="button" class="btn btn-primary btn-floating mx-1">
    //            <i class="fab fa-google"></i>
    //          </button>
    //          <button type="button" class="btn btn-primary btn-floating mx-1">
    //            <i class="fab fa-linkedin-in"></i>
    //          </button>
    //        </div>
    //        <div class="divider d-flex align-items-center">
    //        </div>
    //          <p class="text-center fw-bold mx-3 mb-3 mt-4">Or</p> */}
    //       <h2 className='font-weight-20 mb-30 mt-3'>Sign in</h2>

    //      <div class="form-outline mb-4">
    //        <input type="email" id="form3Example3" class="form-control form-control-lg"
    //           placeholder="Enter a valid email address" />
    //         {/* <label class="form-label" for="form3Example3">Email address</label> */}
    //       </div>

    //       <div class="mb-3">
    //       <input type="password" id="form3Example3" class="form-control form-control-lg"
    //           placeholder="Enter your password" />
    //         {/* <label class="form-label" for="form3Example4">Password</label> */}
    //       </div>

    //       <div class="d-flex justify-content-between align-items-center">
    //         <div class="form-check mb-0 ml-3">
    //           <input class="form-check-input" type="checkbox" value="" id="form2Example3" />
    //           <label class="form-check-label" for="form2Example3">
    //             Remember me
    //           </label>
    //         </div>
    //         <a href="#!" class="text-body">Forgot password?</a>
    //       </div>

    //       <div class="text-center text-lg-start mt-3 pt-2">
    //       <button className="sub">Login</button>              
    //         <p class="small fw-bold pt-1 mb-0 mt-3 ml-30">Don't have an account? <a href="#!"
    //             class="link-danger">Register</a></p>
    //       </div>

    //     </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import axios from 'axios';
import logo2 from "./Images/card1.jpg"
import "../styles/loginstyles.css";
import { useHistory, useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email_id: '',
    password: '',
  });
  const history = useNavigate();

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

    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);

      if (response.status === 200) {
        console.log("success");
        history('/', { userData: response.data });
        // Redirect or navigate to a dashboard page
      }
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.response) {
        alert(`Login failed: ${error.response.data}`);
      } else {
        alert('Error logging in');
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
                <h2 className='font-weight-20 mb-30 mt-3'>Sign in</h2>
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
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0 ml-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberCheckbox"
                    />
                    <label className="form-check-label" htmlFor="rememberCheckbox">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center text-lg-start mt-2 pt-1">
                  <button className="sub">Login</button>
                  <p className="small fw-bold pt-1 mb-0 mt-2 ml-30">
                    Don't have an account? <a href="/signup" className="link-danger">Register</a>
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

export default Login;


