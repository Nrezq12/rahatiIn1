import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useEffect,useState } from "react";
import logo from "../../assets/images/logo2.png"
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [ setHeader] = useState(false);

  return (
    <>
    <nav id="navbar" class="">
    <div class="nav-wrapper">
      <div class="logo">
<Link to="/">
          <img width="400px" height="198px" src={logo}/></Link>
      </div >
     
       
      <div style={{position:"fixed"}}>
        
      {user ? user.username : (
      
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

export default Navbar;
