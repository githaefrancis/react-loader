import React, { useState } from "react";
import ReactDOM from "react-dom";
import Loader from "react-loader";
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (

    <div className="App">
      
      <Loader
        loaded={loaded}
        lines={13}
        length={20}
        width={10}
        radius={30}
        corners={1}
        rotate={0}
        direction={1}
        color="#000"
        speed={1}
        trail={60}
        shadow={false}
        hwaccel={false}
        className="spinner"
        zIndex={2e9}
        top="50%"
        left="50%"
        scale={1.0}
        loadedClassName="loadedContent"
      />
    </div>
  );
}

export default App;
