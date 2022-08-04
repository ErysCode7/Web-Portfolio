import React, { useEffect, useRef, useState } from "react";

const CertificateCard = ({ index, cert }) => {
  const [show, setShow] = useState(false);

  const certifacteModal = useRef("");

  useEffect(() => {
    /**
     * Perform if clicked on outside of element
     */
    const handleClickOutside = (event) => {
      if (
        certifacteModal.current &&
        !certifacteModal.current.contains(event.target)
      ) {
        setShow(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [certifacteModal]);

  const showImage = (index) => {
    setShow(true);
  };

  return (
    <>
      <div
        className="card__certificate"
        onClick={() => showImage(index)}
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-once="true"
      >
        <img src={cert} alt="Certicate" />
      </div>
      {show && (
        <div className="card__modal">
          <div className="cert-container">
            <img src={cert} alt="Cert" ref={certifacteModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;
