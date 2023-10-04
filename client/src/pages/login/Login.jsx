import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
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

  const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};
const [ user, setUser ] = useState([]);
const [ profile, setProfile ] = useState([]);

const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
});

useEffect(
    () => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    },
    [ user ]
);

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
  const logOut = () => {
    googleLogout();
    setProfile(null);
};


  return (
    <div className="text-center m-5-auto">
    <h2>تسجيل الدخول</h2>
    <form action="/home">
        <p>
            <label>اسم المستخدم</label><br/>
            <input type="text" name="first_name" required   id="username"  style={{textAlignLast:"right"}}
           onChange={handleChange} />
        </p>
        <p>
            <label>كلمة المرور</label>
            <br/>
            <input type="password" name="password" required  id="password" style={{textAlignLast:"right"}}
           onChange={handleChange} />
        </p>
        <p>
            <button id="sub_btn"  disabled={loading} onClick={handleClick} >تسجيل الدخول</button>
        </p>
        <p>
        {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
            )}
        </p>
        {error && <span>{error.message}</span>}

    </form>
    <footer>
        <p> <Link to="/register">انشاء حساب</Link></p>
        <p><Link to="/">العودة الى الصفحة الرئيسية</Link></p>
    </footer>
   
</div>
   
  );
};

export default Login;
