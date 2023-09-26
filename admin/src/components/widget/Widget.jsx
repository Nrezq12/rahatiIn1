import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 5;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "المستخدمين",
        isMoney: false
     
      };
      break;
    case "order":
      data = {
        title: "الفنادق",
        isMoney: false
      };
      break;
    case "earning":
      data = {
        title: "الغرف",
        isMoney: false,
       
      };
      break;
    
    default:
      break;
  }

  return (
    <div className="widget">
      
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
    </div>
  );
};

export default Widget;
