import React from "react";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="error404">
      <h1 className="error404_title">404 Error</h1>
      <p className="error404_message">
        Oops! The page you are looking for could not be found.
      </p>
    </div>
  );
};

export default Error404;