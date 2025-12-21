import React from "react";
import mock11 from '../assets/images/mock11.jpg';
import mock12 from '../assets/images/mock12.webp';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                    <a href="" target="_blank" rel="noreferrer"><img src={mock12} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="" target="_blank" rel="noreferrer"><h2>Cybersecurity attack</h2></a>
                    <p>Cybersecurity attack Simulation uthorized ethical hackin roject conducted in controlled training environment to identify and exploit system vulnerabilities and assess security wecknesses.</p>
            </div>
            <div className="project">
                    <a href="" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="" target="_blank" rel="noreferrer"><h2>Memory Forensics Investigation</h2></a>
                    <p>Conducted an authorized digital forensic investigation involving live RAM acquisition and analysis in a controlled training environmentAnalyzed memory images using FTK Imager to recover deleted forensic artifacts and documented findings following forensic best practices.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;