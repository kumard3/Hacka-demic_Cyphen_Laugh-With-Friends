import React from "react";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div className="home">
      <Typewriter
        options={{
          strings: ["To kaise hai aap log"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Home;
