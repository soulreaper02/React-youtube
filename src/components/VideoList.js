import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelectApp }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelectApp={onVideoSelectApp}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
