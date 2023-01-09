import React from "react";
import "./style.scss";
import banner from "../../../images/alfred.jpg";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollIntoSection } from "../../utils/common";

const IntroContent = () => {
  return (
    <div className="intro_content">
      <div className="layout">
        <div className="left_col">
          <h1 className="title">
            <span className="small_text">
              <span className="text">Hello</span>
              {/* <span className="icon">
                <img src={hand} alt="" />
              </span> */}
              <span className="text">, I am</span>
            </span>
            <span className="big_text">Alfred Roshan</span>
            <span className="sub_title"> -Software Developer</span>
          </h1>
          <p>
            Passionate and enthusiastic Software Developer with 2 years
            experience in the developing production level software using the
            latest web technologies available .
          </p>
          <div className="btn" onClick={() => scrollIntoSection("contact")}>
            <CallToAction text="Contact Me" className="call_to_action" />
          </div>
        </div>
        <div className="right_col">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
    // <div className="intro_content">
    //   <div className="container">
    //     <div className="left_col">
    //       <h1 className="title">
    //         <span className="small_text">
    //           <span className="text">Hello</span>
    //           {/* <span className="icon">
    //             <img src={hand} alt="" />
    //           </span> */}
    //           <span className="text">, I am</span>
    //         </span>
    //         <span className="big_text">Gokul V G</span>
    //       </h1>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
    //         accusamus!Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Laborum, accusamus!Lorem ipsum dolor sit amet consectetur
    //         adipisicing elit. Laborum, accusamus!
    //       </p>
    //       <CallToAction text="Contact Me" className="call_to_action" />
    //     </div>
    //     <div className="right_col"></div>
    //   </div>
    // </div>
  );
};

export default IntroContent;
