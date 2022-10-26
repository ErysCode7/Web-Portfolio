import React from "react";

const SkillsCard = ({ skill }) => {
  return (
    <div className="app__skills-container_skills-card">
      <img src={skill.image} alt={skill.text} />
      <p className="app__skills-container_skills-card_text">{skill.text}</p>
    </div>
  );
};

export default SkillsCard;
