import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Wilson Coelho</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Applications" , "React Native Mobile Apps", "IBM Cognos TM1", "Robotic Process Automation"
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
