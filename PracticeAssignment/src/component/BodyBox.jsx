import React from "react";

export const BodyBox = (props) => {
  return (
    <>
      <div className={props.classname}>
        <h1>Hello</h1>
        <h4>
          When you hover on this div the Background-color change into
          trancparent and border of this div become background-color
        </h4>
        <h3>Thank You</h3>
      </div>
    </>
  );
};
