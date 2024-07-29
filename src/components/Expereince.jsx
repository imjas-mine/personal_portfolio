import React from "react";

const Expereince = () => {
  return (
    <div className="bg-gradient-to-r from-[#151b34]  to-[#030d35] flex flex-col justify-center items-center font-roboto">
      <h1 className="bg-gradient-to-r from-pink-500 to-purple-600 font-bold text-5xl bg-clip-text text-transparent">EXPERIENCE</h1>
      <div className="container flex flex-col justify-center items-center mt-10 ">
        <div className="text-white bg-gradient-to-r from-[#2c3a74] to-[#030d35] p-10 m-4 w-[75%] flex items-center">
          <img className="h-20 pr-10"
            src="https://www.sikich.com/wp-content/uploads/2024/02/Webo.ArcticWolf.jpg"
            alt=""
          />
          <div>
            <h1 className="text-2xl font-semibold">
              Network & Technology Operations Analyst Co-op | Arctic Wolf
            </h1>
            <div className="">
              January 2024 - April 2024
            </div>
            <ul className="list-disc text-gray-300 pt-4">
              <li>
                Provided frontline support in the Operations Center for global
                security operations
              </li>
              <li>
                Troubleshooted and resolved customer-facing issues related to
                sensor health, endpoint agent installation, and cloud sensor
                configurations
              </li>
              <li>
                Documented technical solutions and maintained knowledge-based
                articles.
              </li>
              <li>
                Collaborated with internal teams on critical issues and
                time-sensitive tasks
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white bg-gradient-to-r from-[#2c3a74] to-[#030d35] p-10 m-4 w-[75%] flex  items-center">
        <img className="h-20  pr-10"
            src="https://pbs.twimg.com/profile_images/877241849676738560/AfFG893b_400x400.jpg"
            alt=""
          />
          <div>

          <h1 className="text-2xl font-semibold">
            Coop Peer Mentor | Conestoga College
          </h1>
          <div classname="">
            May 2024 - August 2024
          </div>
          <ul className="list-disc pt-3 text-gray-300">
            <li>
              Welcomed new co-op students and provide them with information on
              services and resources
            </li>
            <li>
              Assisted students in navigating job search tools such as myCareer
              Portal, Vmock etc
            </li>
            <li>
              Effectively communicated with a diverse student population,
              demonstrating strong interpersonal skills.
            </li>
          </ul>
          </div>
        </div>
        <div className="text-white bg-gradient-to-r from-[#2c3a74] to-[#030d35] p-10 m-4 w-[75%] flex items-center">
        <img className="h-20 pr-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqpEZ-zuvZETn8mZ5m4c14kygqXtb8Iqpsg&s"
            alt=""
          />
          <div>

          <h1 className="text-2xl font-semibold">Sales Associate | Marks</h1>
          <div classname="">June 2023 - Present</div>
          <ul className="list-disc pt-3 text-gray-300">
            <li>
              Analyzed, identified, and recommended products to customers for
              outstanding experience
            </li>
            <li>
              Consistently upsold customers the features of Canadian Tire
              Mastercard
            </li>
          </ul>
        </div>
          </div>
      </div>
    </div>
  );
};

export default Expereince;
