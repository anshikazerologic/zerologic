import React, { useEffect, useRef } from "react";

const App = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  }, []);

  return (
    <main className="container">
      <section className="video-section">
        <div className="video-wrapper">
          <video ref={videoRef} autoPlay loop muted playsInline>
            <source src="/zerologicComingsoon.mp4" type="video/mp4" />
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