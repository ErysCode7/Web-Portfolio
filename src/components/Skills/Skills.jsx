import React from "react";
import MultiDevice from "../../assets/images/multi-device.svg";
import images from "./imports";
import "./Skills.scss";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section
      className="app__skills"
      id="skills"
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
    >
      <div className="app__skills-title">
        <h2 className="app__skills-title_title">Skills</h2>
        <p className="app__skills-title_content">
          I translate UI/UX design into successful responsive websites that are
          fast, easy to use, and built with best practices. The main area of my
          expertise is front-end development, HTML, CSS, JS, & React. As an
          aspirant frontend developer most of my skills are heavily focused on
          different frontend technologies.
        </p>
        <p className="app__skills-title_content">
          Despite knowing these frontend technologies I also have experience in
          server side languanges such as PHP and MYSQL and basic knowledge in
          Python and Java.
        </p>

        <p className="app__skills-title_content">
          As of this moment i'm currently learning state management in React. I
          also know the basics of NextJS and TypeScript. Soon enough I will dive
          to the core topics of these technologies NextJS and TypeScript.
        </p>
      </div>
      <div className="app__skills-container">
        <div
          className="app__skills-container_skills"
          data-aos="zoom-out"
          data-aos-offset="300"
          data-aos-delay="700"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          {images.map((image, index) => (
            <SkillsCard key={index} image={image} />
          ))}
        </div>
        <div className="app__skills-container_image">
          <img src={MultiDevice} alt="MultiDevice" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
