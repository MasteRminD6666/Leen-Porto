import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMJX0FYj5aPpV1D-Aww586PGCtQJzc_j3Qw&s" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="#" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/leen-abdeen-0781453a4/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Leen Abdeen</h1>
          <p>Cyber Security</p>

          <div className="mobile_social_icons">
            <a href="#" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/leen-abdeen-0781453a4/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;