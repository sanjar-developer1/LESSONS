import { useState, useRef, useEffect } from "react";
import music from "./music";
import Previous from "./assets/previous.svg";
import Play from "./assets/play.svg";
import Next from "./assets/next.svg";
import Pause from "./assets/pause.svg";
import "./App.css";

function App() {
  const [musicIndex, setMusicIndex] = useState(0);
  const musiqa = music[musicIndex];
  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef(null);

  function nextMusic() {
    setMusicIndex((item) => (item + 1) % music.length);
  }
  function previousMusic() {
    setMusicIndex((item) => (item === 0 ? music.length - 1 : item - 1));
  }
  useEffect(() => {
    if (isPlay && audioRef.current) {
      audioRef.current.play();
    }
  }, [musicIndex]);

  // Play

  function togglePlayHouse() {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlay(!isPlay);
  }
  return (
    <div className="music">
      <img src={musiqa.image} alt={musiqa.title} loading="lazy" />
      <h3>{musiqa.title}</h3>
      <div className="music-center">
        <p>4:32-6:59</p>
        <hr />
      </div>
      <audio
        ref={audioRef}
        src={musiqa.music}
        controls
        style={{ display: "none" }}
      />
      <div className="music-next">
        <button
          className="music-next-previous"
          onClick={() => {
            previousMusic();
          }}
        >
          <img
            src={Previous}
            alt="<"
            loading="lazy"
            style={{ width: "calc(36/14.4*1vw)", height: "calc(36/14.4*1vw)" }}
          />
        </button>
        <button
          className="music-next-play"
          onClick={() => {
            togglePlayHouse();
          }}
        >
          <img
            src={isPlay ? Pause : Play}
            alt="play"
            loading="lazy"
            style={{ width: "calc(36/14.4*1vw)", height: "calc(36/14.4*1vw)" }}
          />
        </button>
        <button
          className="music-next-next"
          onClick={() => {
            nextMusic();
          }}
        >
          <img
            src={Next}
            alt="<"
            loading="lazy"
            style={{ width: "calc(36/14.4*1vw)", height: "calc(36/14.4*1vw)" }}
          />
        </button>
      </div>
    </div>
  );
}

export default App;
