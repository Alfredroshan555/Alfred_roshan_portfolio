import React from "react";
import Section from "../shared/Section";
import "./style.scss";
import tech from "../../images/tech-icons.png";
import CallToAction from "../shared/CallToAction";

const Skills = () => {
  return (
    <Section background="dark" id="skills">
      <div className="skills_container">
        <div className="left_col">
          <img src={tech} alt="" />
        </div>
        <div className="right_col">
          <h2>Skills</h2>
          <p>
            I have worked mainly in the Front-end domain using the latest
            JavaScript frameworks and libraries such as React.js,Vue.js and
            Next.js. I also have experience working on the backend with
            technologies such as like Node.js & Express.js .Worked on mobile
            development(Android/ios) with Ionic framework using both React &
            Vue.js
          </p>
          <a
            href="Alfred_roshan_resume.pdf"
            download="Alfred_roshan_resume.pdf"
            className="btn"
          >
            <CallToAction text="Download CV" />
          </a>
          {/* <div className="download_button">Download CV</div> */}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
