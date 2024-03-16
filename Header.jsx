import React from "react";
import "../component/allStyle/HeaderStyle.css";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo">amazon</div>
        {/* <input type="text"/> */}

        <input type="checkbox" id="click" />

        <label htmlFor="click" className="check">
          <div className="menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </label>
        <div className="un">
          <ul>
            <div className="active liv">home</div>
            <div className="liv">service</div>
            <div className="liv cart">
              Cart <div className="circle">90</div>
            </div>
            <div className="liv">login</div>
            <div className="liv signUp">Sign Up</div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
