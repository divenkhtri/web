import React from 'react';
import './../../styles/AboutUs/AboutTeamSection.css'; // Import the CSS file for styling

const AboutTeamSection = () => {
  return (
    <div className="team-section-container">
      <h2 className="team-section-title">Our Team</h2>
      <div className="team-member-container">
        <div className="team-member">
          <img src="/team-member-1.jpg" alt="Team Member 1" className="team-member-photo" />
          <h3 className="team-member-name">John Doe</h3>
          <p className="team-member-position">Web Developer</p>
        </div>
        <div className="team-member">
          <img src="/team-member-2.jpg" alt="Team Member 2" className="team-member-photo" />
          <h3 className="team-member-name">Jane Smith</h3>
          <p className="team-member-position">Software Engineer</p>
        </div>
        <div className="team-member">
          <img src="/team-member-3.jpg" alt="Team Member 3" className="team-member-photo" />
          <h3 className="team-member-name">Mike Johnson</h3>
          <p className="team-member-position">Network Security Specialist</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTeamSection;
