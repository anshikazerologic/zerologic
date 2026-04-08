import React, { useEffect, useRef } from "react";

const App = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    
    video.muted = true;
    video.defaultMuted = true;

    
    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const resume = () => {
            video.play();
            document.removeEventListener("touchstart", resume);
            document.removeEventListener("click", resume);
          };
          document.addEventListener("touchstart", resume, { once: true });
          document.addEventListener("click", resume, { once: true });
        });
      }
    };

    video.addEventListener("canplay", tryPlay);

    return () => {
      video.removeEventListener("canplay", tryPlay);
    };
  }, []);

  return (
    <main className="container">
      <section className="video-section">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
          >
            <source src="/final-video.mp4" type="video/mp4" />
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