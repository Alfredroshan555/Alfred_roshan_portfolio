import React from "react";
import "./style.scss";

import IntroContent from "./intro-content";

const Intro = () => {
  return (
    <div className="intro_section" id="intro">
      <div className="vector_bg" id="parallax"></div>
      <div className="content">
        <IntroContent />
      </div>
    </div>
  );
};

export default Intro;
