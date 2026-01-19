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
                    <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Secure Network Implementation Project"><img src={mock12} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Secure Network Implementation Project"><h2>Secure Network Implementation with Firewall and Access Control (Cisco Packet Tracer)</h2></a>
                    <p>Implemented a secure network with a firewall to control traffic between different network segments. Configured access control lists (ACLs) to restrict unauthorized access while allowing legitimate traffic. The project highlights network segmentation, security policies, and traffic filtering.
</p>
            </div>
            <div className="project">
                    <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Dynamic Routing Network Project"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Dynamic Routing Network Project"><h2>Dynamic Routing Network using OSPF (Cisco Packet Tracer)</h2></a>
                    <p>Designed and implemented a network using the OSPF routing protocol to enable dynamic routing between multiple subnets. The project demonstrates the setup of routing tables, area configuration, and efficient path selection to optimize network traffic.
</p>
            </div>
        </div>
    </div>
    );
}

export default Project;