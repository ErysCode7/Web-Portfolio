import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Button from "@mui/material/Button";
import React, { useEffect, useRef, useState } from "react";
import globe from "vanta/dist/vanta.globe.min";
import "./VantaLoader.scss";

const VantaLoader = ({ setLoading }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        globe({
          el: myRef.current,
          // color: 0xff0000,
          // backgroundColor: 0x0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef} className="app__vantaloader">
      <h1>Welcome to my Portfolio</h1>
      <Button
        onClick={() => setLoading(false)}
        variant="contained"
        endIcon={<ArrowRightIcon />}
      >
        Click to continue
      </Button>
    </div>
  );
};

export default VantaLoader;
