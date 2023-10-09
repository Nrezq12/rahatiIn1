import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import SwipeRightIcon from '@mui/icons-material/SwipeRight';


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">راحتي إن</span>
        </Link>
      </div>
      <hr />
      <div className="center" style={{textAlignLast:"right",paddingRight:"20px"
}}>
        <ul>
          <p className="title">الرئيسية</p>
          <li>

           
            <Link to="/" style={{ textDecoration: "none" }}>

            <span>لوحة التحكم</span></Link>
            <DashboardIcon className="icon" />
          </li>
          <p className="title">القائمة</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              
              <span>المستخدمين</span>
              <PersonOutlineIcon className="icon" />
            </li>
          </Link>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <span>الفنادق</span>
              <StoreIcon className="icon" />

            </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
              
              <span>الغرف</span>
              <CreditCardIcon className="icon" />
            </li>
          </Link>
          <li>
          
            <span>التوصيل</span>
            <LocalShippingIcon className="icon" />
          </li>
         
          <Link to="/confirmb" style={{ textDecoration: "none" }}>
          <li>
          <span>الحجوزات</span>

            <SwipeRightIcon className="icon" />
          </li>
          </Link>
          
         
          <li>
        
            <Link to="/login"  style={{ textDecoration: "none" }}>
            <span>تسجيل الخروج</span></Link>
            <ExitToAppIcon className="icon" />
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
