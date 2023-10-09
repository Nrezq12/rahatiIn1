import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import "./Forgot.css"
import { NavLink, useNavigate } from "react-router-dom"
import useFetch from "../../hooks/useFetch"

const Forgot=()=>{
    const {data,loading,error}=useFetch(`https://rahati-in7.onrender.com/api/users/`)

    const [credentials, setCredentials] = useState("");
  
    const [userid, setUserid] = useState("");
    const [username, setUsername] = useState("");
  
  
  
    const navigate = useNavigate();
  
    const handleClick = async (e) => {
        e.preventDefault()
        data.forEach(element => {
    
          if((credentials)==(element.email)){
            setUserid(element._id)
            setUsername(element.username)
          }
          
        });
        alert("Validated Successfully..")
      
        
      };
    
      const handleclick=async(e)=>{
        e.preventDefault()
        if(userid==""){
            alert("Invalid Email..")
        }else{
            alert("Correct Credentials")
            navigate("/forgotid",{state:{userid,username}}) ;

        }
       
      }
      
    return(
        <div className="login">
            
            <div className="lContainer">
            
                
                <span className="sp"> أدخل ايميلك لإعادة تعيين كلمة المرور الخاصة بك</span>
                
                <input type="text" className="lInput" placeholder="الايميل" id="email" onChange={(e)=>setCredentials(e.target.value)} />
               
                <button disabled={loading} onClick={handleClick} className="lButton">التحقق من صحة البريد الايميل بك
</button>
                <button disabled={loading} onClick={handleclick} className="lButton">إعادة تعيين كلمة المرور
</button>
               

                
            </div>
        </div>
    )
}
export default Forgot