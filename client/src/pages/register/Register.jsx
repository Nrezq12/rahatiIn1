

import {useContext, useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {

    const [username,setUsername]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [phone,setPhone]=useState()
    const [country,setCountry]=useState()
    const [city,setCity]=useState()
    const { loading, error, dispatch } = useContext(AuthContext);

    const handleClick = async (e) => {
        e.preventDefault();

 axios.post("https://rahati-in7.onrender.com/api/auth/register", {username,email,password,phone,country,city})
 .then (result =>console.log(result))
    .catch (err=> console.log(err)) 
    
    
  };
return(
    <div className="login">
    <div className="lContainer">
    <h1 className="text-center m-5-auto"  style={{alignSelf:'center'}}>إنضم إلينا</h1>
            <input type="text" name="first_name"
            placeholder="اسم المستخدم"
            className="lInput"
            onChange={(e)=> setUsername(e.target.value)}
            required />
        
           
            <input type="email"
             className="lInput"
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="الايميل"
            name="email" required />
        
            <input type="password"
            placeholder="كلمة المرور"
            className="lInput"
            onChange={(e)=> setPassword(e.target.value)}
            name="password" requiredc />
                  <input type="tel" id="phone" name="phone" 
                  placeholder="رقم الهاتف"
                   onChange={(e)=> setPhone(e.target.value)}
                   className="lInput" pattern=" /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/"/>

              
                  <input
                   onChange={(e)=> setCountry(e.target.value)}
                   placeholder="البلد"

                   className="lInput"
                  />
   
                  <input
                   onChange={(e)=> setCity(e.target.value)}
                   className="lInput"
                   placeholder="المدينة"

                  />
             
        <button disabled={loading} onClick={handleClick} className="lButton">
             اشتراك
            </button>

            <span className="shr">
                <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span className="sh1"> تسجيل الدخول </span>
            </Link></span>
            <p>
            {error && <span>{error.message}</span>}
        </p>
  
    </div>
</div>

);








};



    export default Register;
