import React from "react";

function Nav(props) {
  return (
    <div className="nav">
      <h1>WINC LiL' LIEDJESLIJST</h1>
      <button onClick={props.aboutLinkClick} className="about-button">
        About App
      </button>
    </div>
  );
}

export default Nav;
