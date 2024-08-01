import React from "react";
import {getImageUrl} from "../utils";
const About = () => {
  return (
    <div id="about" className="bg-gradient-to-r from-[#151b34]  to-[#030d35] flex flex-col justify-center items-center font-roboto ">
      <div className="bg-slate-950 w-[85%] flex flex-col items-center h-[600px] mt-20">
        <h1 className="bg-gradient-to-r from-pink-500 to-purple-600 font-bold text-5xl bg-clip-text text-transparent py-10">
          ABOUT
        </h1>
        <div className="flex w-full h-fit">
          <div className="w-[50%] flex  justify-center items-center ">
            <img className="h-[400px]" src={getImageUrl("about.png")} alt="" />
          </div>
          <div className="text-white w-[50%] flex flex-col justify-center items-center text-xl pr-10">
            <p>
              Hi! I am Balyogeshwar.🙋‍♂️
                    <br />
                    <br />
              <p>
                I am pursuing a diploma in IT and Infrastructure, I'm set to
                graduate in August 2024. My role as a Co-op Peer Mentor and
                previous experience as a Network & Technology Operations Analyst
                at <span className="font-bold">Arctic Wolf </span>
                have honed my competencies in customer service, active
                listening, and attention to detail. In parallel, working as a
                Sales Associate at Mark's has strengthened my ability to enhance
                customer experiences.
              </p>
             
            </p>
            <br />
            <p>
              When I'm not immersed in technology, you can find me exploring the
              intricacies of geopolitics, stargazing into the wonders of
              astronomy, diving into the world of homeopathy, giving back
              through community service, or delving into the rich tapestry of
              history.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
