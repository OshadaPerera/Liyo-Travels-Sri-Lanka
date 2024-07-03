import React, { useEffect } from "react";
import "./styles/loaderStyles.css";

const Loader = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="loader">
      <div className="lottie-animation">
        <dotlottie-player
          src="https://lottie.host/d6c1b7c8-3ec7-41d1-9057-3a70ba0728da/yHkQlHms7t.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </div>
  );
};

export default Loader;
