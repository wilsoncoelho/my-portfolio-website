import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>wilson coelho</h1>
        <Typed
          className="typed-text"
          strings={[
            "React Js",
            "React Native",
            "Redux",
            "React Hooks",
            "Design Patterns",
            "Native-Base",
            "Node.js",
            "Express",
            "CSS Styling",
            "Cross-Platform","React Native Mobile Apps", "React Web Apps"   
          ]}
          typeSpeed={60}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">contact me</a>
      </div>
    </div>
  );
};

export default Header;
