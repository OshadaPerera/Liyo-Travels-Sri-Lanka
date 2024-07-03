import React from "react";
import NavBar from "../components/NavBar";
import "./styles/homeStyles.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="homePage">
      <div className="coverSection">
        <NavBar theme="white" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
