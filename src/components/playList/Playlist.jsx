import React from 'react';
import './PlayList.css'; 

const Playlist = ({ videos, onSelectVideo }) => {
  return (
    <div className="playlist-container">
      <ul>
        {videos.map((video, index) => (
          <li key={index} onClick={() => onSelectVideo(index)} className="playlist-item">
            <p>{index+1}</p>
            <div className="thumbnail">
              <img src={`https://storage.googleapis.com/gtv-videos-bucket/sample/${video.thumb}`} alt={video.title} />
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.subtitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;