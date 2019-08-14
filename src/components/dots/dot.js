import React from "react";

const Dot = ({ dotId, imageId }) => (
  <div className={"dot " + (imageId === dotId ? "white" : "white50")} />
);

export default Dot;
