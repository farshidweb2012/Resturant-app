import React from "react";
import "./footer.css";
import footerlogo from "../../Shop_Asset/logo.avif";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img alt="logo" src={footerlogo} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            voluptate? Enim totam iste cupiditate earum laboriosam illo maxime,
            porro alias exercitationem voluptatum non sequi quos tempora in
            dolorum beatae officia.
          </p>
          <div className="social-icon">
            <FontAwesomeIcon
              size="2x"
              className="social-icon-icon"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              size="2x"
              className="social-icon-icon"
              icon={faLinkedin}
            />
            <FontAwesomeIcon
              size="2x"
              className="social-icon-icon"
              icon={faTwitter}
            />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>AboutsUs</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Toch</h2>
          <ul>
            <li>+98-935-769-3431</li>
            <li>farshid1.god@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        {" "}
        &copy;CopyRight in 2025 .All-right-Reserved{" "}
      </p>
    </div>
  );
};
