import React, { useState, useContext } from 'react';
import axios from 'axios';
import Home from './Home';
import "../styles/loginstyles.css";
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [isLog, setIsLog] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
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
      console.error(error);
    }
  };

  return (
    <div className='log-main-div'>
    <FaUserCircle className='user-logo'/>
    <div className='log-d'>
    <form onSubmit={handleSubmit}>
      <label className='label-1'>
        <input type="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange} className='temail' />
      </label>
      <br />
      <label className='label-2'>
        <input type="password" placeholder='Password' name="password" value={formData.password} onChange={handleChange} className='tpw'/>
      </label>
      <br />
      <div className='clickhere'>
      <p>Don't have an accoount<a href='/signup'>Click here</a></p>
      </div>
      <button className='log-sub' type="submit">Login</button>
      
    </form>
    </div>
    </div>
  );
};

export default Login;
