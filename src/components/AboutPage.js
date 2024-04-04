import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        ab<span>out</span>
      </div>
      <div className="about-info">
        <div className="about-left">
      As a full stack developer, I specialize in crafting minimalist, clean solutions using JavaScript, HTML, CSS, and Node.js. My passion lies in creating elegant, user-friendly applications, prioritizing simplicity and functionality.
        </div>
        <div className="about-right">
          <p>
            Hello, I'm Mahammad Aafil, a dedicated<span> full-stack developer </span>with expertise in web development and internet applications from{" "}
            <span>Fanshawe College</span>.
          </p>
          <p>
          Proficient in both frontend and backend technologies, I bring fresh perspectives and a passion for creating seamless user experiences. Having completed my studies in web development, I aspire to transition into a
            <span> full-stack developer</span> role.
          </p>
          <p>
            currently, I’m excited about honing my skills on building <span>functional</span> and
            <span> aesthetic</span> websites and constantly learning and updating myself with<span> technological trends</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
