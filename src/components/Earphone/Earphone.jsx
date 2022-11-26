import React, { useEffect, useRef, useState } from "react";
import piano from "../../assets/audio/piano.mp3";
import EarphoneOff from "../../assets/images/earphoneOff.svg";
import EarphoneOn from "../../assets/images/earphoneOn.svg";
import "./Earphone.scss";

const Earphone = () => {
  const [sound, setSound] = useState(false);
  const [hover, setHover] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    if (sound === true) {
      audioRef.current?.play();
    } else {
      audioRef.current.pause();
    }
  }, [sound]);

  return (
    <>
      <button
        className="app__earphone"
        onClick={() => setSound((prev) => !prev)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={sound ? EarphoneOn : EarphoneOff}
          alt="Earphone"
          className="app__earphone-img"
        />
        <span
          className={hover ? "app__earphone-span_show" : "app__earphone-span"}
        >
          {sound ? `Sound On` : `Sound Off`}
        </span>
        {/* AUDIO */}
        <audio ref={audioRef} autoPlay className="app__audio">
          <source src={piano} type="audio/mp3" />
        </audio>
      </button>
    </>
  );
};

export default Earphone;
