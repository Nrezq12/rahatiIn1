import "./footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    
    faTiktok,

} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
 
  return (
    <footer className="footer" style={{width:"-webkit-fill-available"}}>
    <div className="footer-container">
       
      <div className="divFooter">
        <a
            href="https://www.instagram.com/raha212t/?hl=ar"
            target="_blank"
            className="item3"
        >
            <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
            href="https://www.tiktok.com/@rahatiinhotail"
            target="_blank"
            className="item4"
        >
            <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a
            href="https://twitter.com/raha212t1"
            target="_blank"
            className="item5"
        >
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        </div>
        <div className="item2">
            <span style={{ paddingRight: 5 }}>Copyright </span>
            <FontAwesomeIcon icon={faCopyright} />{" "}
            <span style={{ paddingLeft: 5 }}>
                {new Date().getFullYear()} [جميع الحقوق محفوظة]
            </span>
        </div>
       
    </div>
</footer>
  );
};

export default Footer;
