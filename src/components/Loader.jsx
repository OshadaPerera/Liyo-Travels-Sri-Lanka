import React, { useEffect } from "react";
import "./styles/loaderStyles.css";
import logo from "../assets/images/logo.png";

const Loader = () => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
  //   script.type = "module";
  //   document.body.appendChild(script);
  // }, []);

  return (
    <div className="loader">
      <img src={logo} alt="Liyo Travels Logo" />
      {/* <h2>Liyo Travels Sri Lanka</h2> */}

      {/* <div className="lottie-animation">
        <dotlottie-player
          src="https://lottie.host/e73863d9-24d7-4ad2-a358-d659e7929312/193Q7s0kRF.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div> */}
    </div>
  );
};

export default Loader;
