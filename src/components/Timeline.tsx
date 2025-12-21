import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Member in IEEE - Social Media IEEE Branch</h3>
            <h4 className="vertical-timeline-element-subtitle">BAU Center</h4>
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li>Worked effectively within a team-based environment, collaborating with peers to complete assigned tasks and projects.</li>
              <li>Communicated clearly with team members and supervisors to ensure task announcements and timely completion.</li>
              <li>Demonstrated strong time management by meeting deadlines during intensive training schedules.</li>
              <li>Adapted quickly to a fast-paced work environment and learned new tools and concepts efficiently.</li>
              <li>Responsible and professional work attitude.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;