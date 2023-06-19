import React, { useState } from 'react';
import axios from 'axios';
import "../styles/signupstyles.css";
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstname, lastname, email, password, repassword } = formData;

    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      repassword: repassword
    };

    try {
      const response = await axios.post('https://fantastic-elk-handkerchief.cyclic.app/signup', data);
      const { status, firstname } = response.data;
      const userData = {
        username: firstname,
        stat: true,
      };
      if(status == "loginSuccess"){
        navigate("/", { state: userData });
        console.log("ok")
        
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='signup-div'>
    <FaUserCircle className='user-logo'/>
    <form className="form" onSubmit={handleSubmit}>
      <label className='label-1'>
        <input className='tpw' type="text" placeholder='First Name' name="firstname" value={formData.firstname} onChange={handleChange} />
      </label>
      <br />
      <label className='label-1'>
        <input className='tpw' type="text" placeholder='Last Name' name="lastname" value={formData.lastname} onChange={handleChange} />
      </label>
      <br />
      <label className='label-1'>
        <input className='tpw' type="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label className='label-1'>
        <input className='tpw' type="password" placeholder='Password' name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br />
      <label className='label-1'>
        <input className='tpw' type="password" placeholder='Confirm Password' name="repassword" value={formData.repassword} onChange={handleChange} />
      </label>
      <br />
      <div className='clickheresignup'>
      <p>Have an accoount<a href='/login'>Click here</a></p>
      </div>
      <button className='log-sub' type="submit">Signup</button>
    </form>
    </div>
  );
};

export default Signup;
