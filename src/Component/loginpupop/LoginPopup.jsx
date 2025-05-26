import React, { useState } from "react";
import "./popuplogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  
  return (
    <div className="popup-login">
      <div className="popup-login-title">
        <h2>{currentState}</h2>
        <FontAwesomeIcon
          onClick={() => setShowLogin(false)}
          className="popup-login-close-icon"
          icon={faClose}
        />
      </div>
      <form className="popup-login-form">
        <div className="popup-login-form-input">
          {currentState === "Sign Up" ? (
            <input type="text" placeholder="Your name" required />
          ) : (
            " "
          )}
         
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
          <button>
            {currentState === "Sign Up" ? "Create account" : "Login"}
          </button>
        </div>
        <div className="popup-login-text">
          <p>
            {setCurrentState(false)}
            {currentState === "Login" ? (
              <p>
                Create an account<span>Click here</span>
              </p>
            ) : (
              <p>
                already hav an account?<span>Login here</span>{" "}
              </p>
            )}
          </p>
        </div>
      </form>
    </div>
  );
};
