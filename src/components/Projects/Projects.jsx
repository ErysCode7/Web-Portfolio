import React from "react";
import CertificateCard from "./CertificateCard";
import ProjectDetails, {
  CSScertificate,
  FCC,
  Java,
  PHP,
  Python,
  ResponsiveWeb,
} from "./imports";
import "./Projects.scss";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const certificates = [CSScertificate, FCC, ResponsiveWeb, Java, PHP, Python];

  return (
    <section
      className="app__projects"
      id="projects"
      data-aos="fade-down"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__projects-container">
        <h2>Projects</h2>
        <div className="app__projects-container_projects">
          {ProjectDetails.map((projects, index) => (
            <ProjectsCard key={index} projects={projects} />
          ))}
        </div>
        <div className="app__projects-container_certificate">
          <h2>Certificates</h2>
          <div className="app__projects-container_certificate-cert">
            {certificates.map((certificate, index) => (
              <CertificateCard key={index} cert={certificate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
