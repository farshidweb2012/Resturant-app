import React from "react";
import "./appdownlaod.css";
import appstoreIcon from "../../Shop_Asset/appstore.jpg";
import googlestoreicon from "../../Shop_Asset/googlestore.jpg";

export const AppDownlaod = () => {
  return (
    <div className="appdownlaod" id="app-downlaod">
      <h1>for better experinece downlaod our app</h1>
      <div className="download-app-icon">
        <img
          className="download-app-icon-icon"
          src={appstoreIcon}
          alt="appstoreicon"
        />
        <img
          className="download-app-icon-icon"
          src={googlestoreicon}
          alt="appstoreicon"
        />
      </div>
    </div>
  );
};
