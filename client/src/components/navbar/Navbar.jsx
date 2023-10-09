import "./navbar.css";
import { Link ,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AuthPr} from "../../context/AuthPr";

import { useEffect,useState, useRef } from "react";
import logo from "../../assets/images/logo2.png"
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';
import CodeIcon from '@rsuite/icons/Code';
import PageIcon from '@rsuite/icons/Page';
import DetailIcon from '@rsuite/icons/Detail';
import FolderFillIcon from '@rsuite/icons/FolderFill';
import FileDownloadIcon from '@rsuite/icons/FileDownload';
import FileUploadIcon from '@rsuite/icons/FileUpload';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

import axios from "axios";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const [ setHeader] = useState(false);
  const [open, setOpen] = useState(false);
  const [ setUser ] = useState([]);

  const navigate = useNavigate();
  const {dispatch}=useContext(AuthContext)
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };
  const handleclick=()=>{

    navigate("/profile")


  }

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
                  setUser(res.data);
                })
                .catch((err) => console.log(err));
        }
    },
    [ user ]
);
  // useEffect(() => {
  //   let handler = (e)=>{
  //     if(!menuRef.current.contains(e.target)){
  //       setOpen(false);
  //       console.log(menuRef.current);
  //     }      
  //   };

  //   document.addEventListener("mousedown", handler);
    

  //   return() =>{
  //     document.removeEventListener("mousedown", handler);
  //   }
  // });
  return (
    <>
    <nav id="navbar" class="">
    <div class="nav-wrapper">
      <div class="logo">
<Link to="/">
          <img width="400px" height="198px" src={logo}/></Link>
      </div >
     
       
      <div style={{position:"absolute"}}>
        
     
      { 
                 user ?( <div  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}> 
                 
                  
        
                 <button className="button-1" onClick={handleClick}>تسجيل الخروج</button> 

                  <span className="username">{user.username}</span>
                  <img onClick={handleclick} className="logo2" src={user.img ?user.img:"https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="" />

                  
                 
                 
                 </div>
                 
                    
                   ) :  (
      
  <>
  <Link to="/register">
  <button className="button-1" role="button">انشاء حساب</button>
  </Link>
  <Link to="/login">
  <button className="button-1" role="button" style={{ marginLeft: "7px" }}>تسجيل الدخول</button>
  </Link>
  </>

      )}
      </div>
    </div>
  </nav>
  
  
  
  
  
  </>
  );
};
function logout(){
  localStorage.clear();
  window.location.href = '/';
}
export default Navbar;
