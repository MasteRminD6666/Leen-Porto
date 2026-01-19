import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faNetworkWired, faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Network Security",
    "Cybersecurity Fundamentals",
    "Linux",
    "Python",
    "Wireshark",
    "Nmap",
    "OWASP Top 10",
    "Security Best Practices",
    "Risk Assessment",
    "Incident Response",
    "Ethical Hacking"
];

const labelsSecond = [
    "Network Administration",
    "System Security",
    "Firewall Configuration",
    "VPN Setup",
    "IDS/IPS",
    "Security Policies",
    "Access Control",
    "Log Analysis",
    "Security Monitoring",
];

const labelsThird = [
    "Python Scripting",
    "Bash Scripting",
    "Security Automation",
    "Vulnerability Scanning",
    "Security Tools",
    "Malware Analysis",
    "Forensics Basics",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faShieldAlt} size="3x"/>
                    <h3>Cybersecurity</h3>
                    <p>As a fresh graduate passionate about cybersecurity, I have a strong foundation in network security, ethical hacking principles, and security best practices. I am eager to apply my knowledge in identifying vulnerabilities, implementing security measures, and contributing to protecting organizational assets while continuously learning and growing in the field.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faNetworkWired} size="3x"/>
                    <h3>Network & System Security</h3>
                    <p>I have foundational knowledge in network administration and system security, including configuring firewalls, setting up secure networks, and monitoring security events. As a fresh graduate, I am developing skills in network defense, intrusion detection, and maintaining secure infrastructure.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Security Scripting & Tools</h3>
                    <p>I am developing proficiency in security scripting using Python and Bash to automate security tasks, analyze vulnerabilities, and work with various security tools. As a fresh graduate, I am building hands-on experience with security automation and learning to leverage scripting for efficient security operations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;