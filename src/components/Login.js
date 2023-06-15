import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const Login = () => {
    const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    navigate("/stime");
  };

  return (
    <div>
        <button onClick={() => navigate("/time")}>Login</button>
    
    </div>
         
  );
};

export default Login;
