import React from "react";
import Youtube from "react-youtube";

//create a function that will hold the actual displaying of the youtube video
const Video = ({ videoId }) => {
  return (
    <div>
      <Youtube width={740} videoId={videoId} />
    </div>
  );
};

export default Video;
