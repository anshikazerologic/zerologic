import React from 'react';

const App = () => {
  return (
    <main className="container">

      
      <section className="video-section">
        <div className="video-wrapper">
          <video autoPlay loop muted playsInline>
            <source src="/zerologicComingsoon.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </section>

      
      <section className="text-section">
        <p className="coming-soon">coming soon</p>
      </section>

    </main>
  );
};

export default App;