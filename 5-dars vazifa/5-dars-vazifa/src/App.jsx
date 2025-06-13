import { useState, useRef } from "react";
import music from "./music";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const audioRef = useRef(null);

  const handleTimeUpdate = () => {
    const current = audioRef.current?.currentTime || 0;
    setTime(current);
  };

  const musiqa = music[0];

  return (
    <div>
      <div className="music">
        <img src={musiqa.image} alt={musiqa.title} />
        <h3>{musiqa.title}</h3>
        <audio
          ref={audioRef}
          src={musiqa.music}
          onTimeUpdate={handleTimeUpdate}
          controls
        />
      </div>
    </div>
  );
}

export default App;
