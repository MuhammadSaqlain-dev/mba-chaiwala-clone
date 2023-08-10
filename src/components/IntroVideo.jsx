import React from "react";
import video from "../assets/video.mp4";
import "../styles/introvideo.scss"

const IntroVideo = () => {
  return (
    <div className="intro">
      <video src={video} muted autoPlay loop controlsList="nodownload"/>
      <div></div>
    </div>
  );
};

export default IntroVideo;
