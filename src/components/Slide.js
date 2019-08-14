import React from "react";

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%",
  };
  return (
  <div className="slide" style={styles} >
    <div className="slide-overlay"></div>
  </div>
  );
};

export default Slide;
