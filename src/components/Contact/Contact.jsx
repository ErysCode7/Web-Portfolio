import React from "react";
import Connection from "../../assets/images/connections.svg";
import Facebook from "../../assets/images/socials/facebook.png";
import Instagram from "../../assets/images/socials/instagram.png";
import LinkedIn from "../../assets/images/socials/linkedin.png";
import "./Contact.scss";

const Contact = () => {
  return (
    <section
      className="app__contact"
      id="contacts"
      data-aos="fade"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__contact-container">
        <div className="app__contact-container_contacts">
          <p className="app__contact-container_contacts-touch">
            - Get in Touch
          </p>
          <h2>Let's create progress together</h2>
          <p>
            For all inquiries, you can contact and message me on any of the
            specified social medias below.
          </p>
          <ul className="app__contact-container_contacts-links">
            <a href="https://web.facebook.com/erys.mozo/" target="blank">
              <img src={Facebook} alt="" />
              Erys Mozo
            </a>
            <a href="https://www.instagram.com/_erysmozo/" target="blank">
              <img src={Instagram} alt="" />
              _erysmozo
            </a>
            <a
              href="https://www.linkedin.com/in/erys-mozo-280190230/"
              target="blank"
            >
              <img src={LinkedIn} alt="" />
              Erys Mozo
            </a>
          </ul>
        </div>
        <div className="app__contact-container_image">
          <img src={Connection} alt="Cennections" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
