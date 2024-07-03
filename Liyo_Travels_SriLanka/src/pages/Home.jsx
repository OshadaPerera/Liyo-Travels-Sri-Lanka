import React from "react";
import NavBar from "../components/NavBar";
import "./styles/homeStyles.css";

function Home() {
  return (
    <div className="homePage">
      <div className="coverSection">
        <NavBar theme="white" />
      </div>
    </div>
  );
}

export default Home;
