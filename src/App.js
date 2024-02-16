import React, { useState } from 'react';
import VideoPlayer from './components/videoPlayer/VideoPlayer';
import Playlist from './components/playList/Playlist';
import { videos } from './components/VideoData';

const App = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const handleSelectVideo = (index) => {
    setSelectedVideoIndex(index);
  };

  const handleVideoEnd = () => {
    const nextIndex = (selectedVideoIndex + 1) % videos.length;
    console.log(nextIndex)
    setSelectedVideoIndex(nextIndex);
  };

  return (
    <div className='app'>
      <div className='video-section'>
        <VideoPlayer
          video={videos[selectedVideoIndex]}
          onEnded={handleVideoEnd}
        />
      </div>
      <div className='playlist-section'>
        <Playlist videos={videos} onSelectVideo={handleSelectVideo} />
      </div>
    </div>
  );
};

export default App;
