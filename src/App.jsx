import React from 'react';

const App = () => {
  return (
    <div className="video-wrapper">
      <video autoPlay loop muted playsInline>
        <source src="/zerologicComingsoon.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      
    </div>
  );
};

export default App;