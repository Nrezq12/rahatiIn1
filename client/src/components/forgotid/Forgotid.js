
// example =>  $2a$10$CwTycUXWue0Thq9StjUM0u => to be added always to the password hash
import axios from "axios"
import {useEffect, useContext } from "react"
import { useState } from "react"
import { useRef } from 'react';

import bcrypt from 'bcryptjs';
import { AuthContext } from "../../context/AuthContext"
import "./Forgotid.css"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
const salt = bcrypt.genSaltSync(10)

const Forgotid=()=>{
    const location=useLocation();
    const [userid, setUserid] = useState(location.state.userid);
    const navigate = useNavigate()

  const passwordInputRef = useRef()

  function handleLoginForm() {
    const password = passwordInputRef.current.value
    const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') // hash created previously created upon sign up
    navigate("/login")
    fetch(`https://rahati-in7.onrender.com/api/users/${userid}`, {
        
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

  return (
    <div className="login">
    <div className="lContainer">
    <h1 className="text-center m-5-auto"  style={{alignSelf:'center'}}> نسيت كلمة المرور </h1>

          <input  className="lInput" ref={passwordInputRef} type='password' placeholder='ادخل كلمة المرور الجديدة' />
          <button
            type='submit'
            className="lButton"
            onClick={e => {
              e.preventDefault()
              handleLoginForm()
            }}>
           ارسال
          </button>
       
    </div>
    </div>
  )
}

export default Forgotid