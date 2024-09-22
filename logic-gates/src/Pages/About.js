import React from "react";
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: "Vikrant Palaskar",
      role: "Developer",
      location: "Pune",
      imageUrl: "/"
    },
    {
      name: "Yash Wairangde",
      role: "Developer",
      location: "Pune",
      imageUrl: "/"
    },
    {
      name: "Snehal Lande",
      role: "React Developer",
      location: "Pune",
      imageUrl: "/"
    },
    {
      name: "Mohammad Umar",
      role: "Software Engineer",
      location: "Pune",
      imageUrl: "/"
    }
  ];

  return (
    <div className="about-container">
      <h2 className="about-title">Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-card">
            <img src={member.imageUrl} alt={member.name} className="team-member-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.location}</p>
          </div>
        ))}
      </div>
      <button className="work-together-btn">Work Together</button>
    </div>
  );
};

export default About;