import axios from "axios";
import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import "./profile.css";
import {faFolderarrowup, faUpload} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import {Tabs} from "antd"




const Profile = () => {
  
  
    const { user }=useContext(AuthContext)
  

  const navigate = useNavigate();
  

  //   Handle Change Function
  

  //   Handle Click Function
 
  return (
    
    <div className="mainContainer">
      
      <div className="contentArea">
      
        <div className="right">
       
          <img required className="img"
              src={user.img ?user.img:"https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt=""
            />
            <div className="details">
                <h1 className="itemTitle">{user.username}</h1>
                <div className="detailItem">
                <span className="itemValue">{user.email}</span>

                  <span className="itemKey" > : الايميل </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">الهاتف :</span>
                  <span className="itemValue">{user.phone}</span>
                </div>
                
                <div className="detailItem">
                  <span className="itemKey">البلد :</span>
                  <span className="itemValue">{user.country}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">المدينة :</span>
                  <span className="itemValue">{user.city}</span>
                  <p>
                  <button>
            <NavLink
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              الصفحة الرئيسية
            </NavLink>
            
            
          </button></p>
          <button>
            <NavLink
              to="/edituser"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              تعديل
            </NavLink>
            
            
          </button>
                </div>
                
              </div>

             

              
            
              
          
        </div>
        </div>
      
    </div>
    
  );
};

export default Profile;