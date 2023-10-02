import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import GoogleLogin from 'react-google-login';
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
  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    console.log(googleData)
  };
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
        <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
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
