import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import "./Edituser.css"
import bcrypt from 'bcryptjs';
import { useRef } from 'react';

import { NavLink, useLocation, useNavigate } from "react-router-dom"
import Password from "antd/es/input/Password"

const EditUser=()=>{
    const { user }=useContext(AuthContext)
    const location =useLocation();
    const passwordInputRef = useRef()

const [credentials1, setCredentials1] = useState({
    username:undefined,
    email:undefined,
    phone:undefined,
    country:undefined,
    city:undefined,
    password:undefined,


});

const { loading, error, dispatch } = useContext(AuthContext);

const navigate = useNavigate();

//   Handle Change Function
const handleChange = (e) => {

e.preventDefault()
setCredentials1((prev) => ({ ...prev, [e.target.id]: e.target.value }));

};


//   Handle Click Function
const handleClick = async (e) => {
e.preventDefault()
try{

   

    const res = await axios.put(
        `https://rahati-in7.onrender.com/api/users/${user._id}`,
        credentials1
        );   
        navigate("/login")

    
}catch(err){
    
}

};
console.log(credentials1);
  
function handleLoginForm() {
    const password = passwordInputRef.current.value
    const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') // hash created previously created upon sign up
    fetch(`https://rahati-in7.onrender.com/api/users/${user._id}`, {
        
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: hashedPassword,
      })
    }
    
    )
  }
  
    return(
        <div className="login2">
            
            <div className="lContainer2">
            <h1  className="sp"  style={{alignSelf:'center'}}>اهلا بك</h1>
            
                
                <span className="sp">
                    
                    <span>قم بتحرير ملف التعريف الخاص بك هنا</span>
               
                </span>
                
                
                 <input type="text" className="lInput" placeholder="اسم المستخدم الجديد" id="username" onChange={handleChange} />
                <input type="email" className="lInput" placeholder="الايميل الجديد" id="email" onChange={handleChange} />
                <input type="tel" className="lInput" placeholder="رقم الهاتف الجديد" id="phone" onChange={handleChange} />
                <input type="text" className="lInput" placeholder="البلد " id="country" onChange={handleChange} />
                <input type="text" className="lInput" placeholder="المدينة " id="city" onChange={handleChange} />
                <input type="password" className="lInput" placeholder="كلمة المرور الجديدة" ref={passwordInputRef}  id="password" onChange={handleLoginForm} />
                <button disabled={loading} onClick={handleClick} className="lButton">ارسال</button>
           
            
            

                
            </div>
        </div>
    )
}
export default EditUser