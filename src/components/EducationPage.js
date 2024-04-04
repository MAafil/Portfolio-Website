import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <p>experience</p>
        <p>
          <span>&</span>education
        </p>
      </div>
      <div className="education-list">
        <div className="education">
          <p>Data Entry and Helpdesk Associate</p>
          <p>SiSGreen Technologies </p>
          <p>
            <span>March'22 - August'22</span>
            <a href="/">
              <LocationOnIcon />
              Mangalore, India
            </a>
          </p>
        </div>
        <div className="education">
          <p>Web Development and Internet Applications</p>
          <p>Fanshawe College</p>
          <p>
            <span>September'22 - May'24</span>
            <a href="/">
              <LocationOnIcon />
              London, Ontario
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
