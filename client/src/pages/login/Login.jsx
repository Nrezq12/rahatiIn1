import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

 
const [ user, setUser ] = useState([]);


  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://rahati-in7.onrender.com/api/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };



  return (
    <div className="login">
    <div className="lContainer">
    <h1 className="text-center m-5-auto">تسجيل الدخول</h1>
    <input type="text" className="lInput" placeholder="اسم المستخدم" id="username" onChange={handleChange} />
                <input type="password" className="lInput" placeholder="كلمة المرور" id="password" onChange={handleChange} />
                <button disabled={loading} onClick={handleClick} className="lButton">تسجيل الدخول</button>
                <span className="shr">
                <Link
              to="/register"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span className="sh1">مستخدم جديد؟ اشتراك</span>
            </Link>
            <br />
            <br />
            <Link
              to="/forgot"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span className="sh1">نسيت كلمة المرور؟</span>
            </Link>
                </span>

                {error && <span className="message">{error.message}</span>}
            </div></div>
    
   
  );
};

export default Login;
