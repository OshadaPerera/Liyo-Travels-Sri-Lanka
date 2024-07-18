import React from "react";
import { Link } from "react-router-dom";
import "./noPageStyles.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles

const NoPage = () => {
  return (
    <div className="noPage">
      {/* <h1 className="display-1">Error 404</h1>
      <p className="lead">Oops! The page you are looking for does not exist.</p> */}
      <div className="noPageAnimation">
        <dotlottie-player
          src="https://lottie.host/8bbb1f9d-5f6c-4999-bf96-9b9ca4a7f30d/AhogFGnR5S.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
};

export default NoPage;
