import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css'

const VideoPlayer = ({ video, onEnded }) => {
  return (
    <>
      <ReactPlayer url={video.sources[0]} controls width='100%' height='fit-content' playing={true} onEnded={onEnded}/>
      <div className='title-container'>
        <h1>{video.title}</h1>
        <p>{video.subtitle}</p>
      </div>
      <p>{video.description}</p>
      
    </>
  );
};

export default VideoPlayer;
