import React, { useEffect, useRef } from "react";
import "./App.css";
import YouTube from "react-youtube";

function App() {
  const players = useRef([]);

  useEffect(() => {
    players.current.forEach((player) => {
      player.unMute();
      player.pauseVideo();
    });
  }, []);

  const onReady = (event) => {
    event.target.mute();
    players.current.push(event.target);
  };

  return (
    <div className="App">
      <div className="video-wrapper">
        <YouTube
          videoId="zRG_6IY00cI"
          opts={{
            width: "100%",
            height: "270px",
            playerVars: {
              autoplay: 0, // 처음에 꺼져있는 상태
              modestbranding: 1,
              loop: 1,
              playlist: "zRG_6IY00cI",
            },
          }}
          onReady={onReady}
        />
        <YouTube
          videoId="KHouJsSH4PM"
          opts={{
            width: "100%",
            height: "270px",
            playerVars: {
              autoplay: 0, // 처음에 꺼져있는 상태
              modestbranding: 1,
              loop: 1,
              playlist: "KHouJsSH4PM",
            },
          }}
          onReady={onReady}
        />
        <YouTube
          videoId="FJrJ2I6gVFM"
          opts={{
            width: "100%",
            height: "270px",
            playerVars: {
              autoplay: 0, // 처음에 꺼져있는 상태
              modestbranding: 1,
              loop: 1,
              playlist: "FJrJ2I6gVFM",
            },
          }}
          onReady={onReady}
        />
        <YouTube
          videoId="fdAEsnuE4RU"
          opts={{
            width: "100%",
            height: "270px",
            playerVars: {
              autoplay: 0, // 처음에 꺼져있는 상태
              modestbranding: 1,
              loop: 1,
              playlist: "fdAEsnuE4RU",
            },
          }}
          onReady={onReady}
        />
        <YouTube
          videoId="KGJJ-mxQesI"
          opts={{
            width: "100%",
            height: "270px",
            playerVars: {
              autoplay: 0, // 처음에 꺼져있는 상태
              modestbranding: 1,
              loop: 1,
              playlist: "KGJJ-mxQesI",
            },
          }}
          onReady={onReady}
        />
        <YouTube
          videoId="1XJqtqRSFtY"
          opts={{
            width: "100%",
            height: "270px",
            playerVars: {
              autoplay: 0, // 처음에 꺼져있는 상태
              modestbranding: 1,
              loop: 1,
              playlist: "1XJqtqRSFtY",
            },
          }}
          onReady={onReady}
        />
      </div>
    </div>
  );
}

export default App;
