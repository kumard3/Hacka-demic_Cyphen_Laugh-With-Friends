import React from "react";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div className="home">
      <div className="home-outer">
        <h1>{`Welcome to Memology by Cyphen
      `}</h1>
        <div className="home-content">
          <img
            src="https://media.giphy.com/media/9GJ2wj29vRqrrx8LJ7/giphy.gif"
            alt=""
          />
          <Typewriter
            options={{
              strings: ["To Kaise Hai aap log"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
