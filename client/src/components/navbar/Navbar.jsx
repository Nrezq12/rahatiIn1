import "./navbar.css";
import { Link } from "react-router-dom";
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
import axios from "axios";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const [ setHeader] = useState(false);
  const [open, setOpen] = useState(false);
  const [ setUser ] = useState([]);




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
        
      {user ? 
     <div >
    
     <Dropdown style={{backgroundColor: 'white'}} icon={<><img src={user.img} style={{width:'50px'}}></img></>} >
         <Dropdown.Item >
            {user.username }
         </Dropdown.Item>
         <Dropdown.Item >
            {user.email }
         </Dropdown.Item>
         <Dropdown.Item onClick={()=>{
           localStorage.clear();
           window.location.href = '/';


         }}>
             تسجيل الخروج
         </Dropdown.Item>
     </Dropdown>
 </div>
      : (
        
      
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
