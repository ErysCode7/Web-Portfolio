import React from "react";
import AboutSVG from "../../assets/images/about.svg";
import "./About.scss";

const About = () => {
  return (
    <section
      className="app__about"
      id="about"
      data-aos="fade-right"
      data-aos-offset="230"
      data-aos-delay="450"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__about-container">
        <div className="app__about-container_text">
          <h2>About</h2>
          <p>
            As an front-end developer from Taguig Philippines. I believe
            in building websites to solve problems, help people and that the
            power of the web should be accessible to everyone. Motivated,
            Organized, and a Curious Person.
          </p>

          <p>
            I've been practicing my skills in different Programming languages,
            and eventually, I started getting better in it, and now it's
            something like a daily routine.
          </p>

          <p>
            I'm currently doing my internship as a Front-End Developer at{" "}
            <a
              href="https://nexplay.gg/"
              target="_blank"
              className="app__links"
            >
              Nexplay
            </a>
          </p>
        </div>
        <div className="app__about-container_image">
          <img src={AboutSVG} alt="Programming" />
        </div>
      </div>
    </section>
  );
};

export default About;
