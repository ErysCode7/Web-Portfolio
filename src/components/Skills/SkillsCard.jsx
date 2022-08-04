import React from "react";

const SkillsCard = ({ image }) => {
  return (
    <div className="app__skills-container_skills-card">
      <img src={image} alt={image} />
    </div>
  );
};

export default SkillsCard;
