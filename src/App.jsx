import React, { useEffect, useRef } from "react";

const App = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;

    if (v) {
      v.defaultMuted = true;
      v.muted = true;
      v.setAttribute("playsinline", "");
      v.setAttribute("webkit-playsinline", "");

      const playVideo = async () => {
        try {
          await v.play();
        } catch (err) {
          console.log("Autoplay prevented:", err);
        }
      };

      playVideo();
    }
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
          >
            <source src="/zerologicvideo.mp4" type="video/mp4" />
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