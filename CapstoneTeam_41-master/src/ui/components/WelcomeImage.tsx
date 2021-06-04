//home screen welcome image
import React from "react";

function WelcomeImage() {
  const url = "/images/homepageImage.png";
  return (
    <img
      src={url}
      style={{ width: 500 }}
      alt="Conductive Attitudes - Welcome"
    />
  );
}

export default WelcomeImage;
