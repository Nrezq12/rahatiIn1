

import { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
const Register = () => {

    const [username,setUsername]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [phone,setPhone]=useState()
    const [country,setCountry]=useState()
    const [city,setCity]=useState()


    const handleClick = async (e) => {
        e.preventDefault();

 axios.post("/auth/register", {username,email,password,phone,country,city})
 .then (result =>console.log(result))
    .catch (err=> console.log(err)) 
    
    
  };
return(
    <div className="text-center m-5-auto">
    <h2>إنضم إلينا</h2>
    <h5>قم بانشاء حسابك الشخصي</h5>
    <form onSubmit={handleClick} action="/home">
        <p>
            <label>اسم المستخدم</label><br/>
            <input  style={{ textAlignLast:"right"}} type="text" name="first_name"
            onChange={(e)=> setUsername(e.target.value)}
            required />
        </p>
        <p>
            <label>الإيميل</label><br/>
            <input type="email"
             style={{ textAlignLast:"right"}}
            onChange={(e)=> setEmail(e.target.value)}
            
            name="email" required />
        </p>
        <p>
            <label>كلمة المرور</label><br/>
            <input type="password"
             style={{ textAlignLast:"right"}}
            onChange={(e)=> setPassword(e.target.value)}
            name="password" requiredc />
        </p>
       <p>
                  <label > رقم الهاتف</label>
                  <input
                   onChange={(e)=> setPhone(e.target.value)}
                   style={{ textAlignLast:"right"}}

                  /></p>
                  <p>
                  <label> البلد</label>
                  <input
                   onChange={(e)=> setCountry(e.target.value)}

                   style={{ textAlignLast:"right"}}
                  />
                </p>

<p>            <label> المدينة</label>
                  <input
                   onChange={(e)=> setCity(e.target.value)}
                   style={{ textAlignLast:"right"}}

                  />
                </p>
        <p>
            <button id="sub_btn" type="submit">انشاء حساب</button>
        </p>
    </form>
    <footer>
        <p><Link to="/login">سجل الدخول</Link></p>
    </footer>
</div>

);








};



    export default Register;
