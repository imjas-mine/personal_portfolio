import React from "react";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#151b34]  to-[#030d35] h-screen flex  items-center justify-center">
      <div className="about w-[50%]">
        <div className="text-6xl text-white">Hi! I am <span className="bg-gradient-to-r from-pink-500 to-purple-600  bg-clip-text text-transparent">Balyogeshwar.</span></div>
        <div className="text-2xl text-white mt-7">
          <TypeAnimation 
            sequence={[
              "I am a student of IT and Infrastructure.",
              1000,
              "I am a Network Analyst.",
              1000,
              "I am a Co-op Peer Mentor.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em",lineHeight:"1.2em"}}
            repeat={Infinity}
          />
        </div>
      </div>

      <div className="image">
        <img className="animate-float" src="./src/assets/baly.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
