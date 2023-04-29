import React from "react";
import Typewriter from "typewriter-effect";
const Intro = () => {
  return (
    <div className=" justify-start text-left pt-6 pl-4 flex flex-col lg:flex-row lg:my-20 text-black">
      <div className="lg:mt-10">
        <h1 className="text-5xl font-bold" style={{color:"white"}}>Hello, I'm Muhammad Anas.</h1>
        <h1 className="lg:text-4xl text-xl font-extrabold text-blue-600 font-mono" >
          <Typewriter
            options={{
              strings: [
                "Front-End Web developer",
                "Cross-Platform Mobile App developer",
                "MERN-Stack developer",
                "React developer",
                "React Native developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="py-6 text-xl" style={{color:"white"}}>
          I'm a self enthusiastic and passionate programmer. I'm a quick learner
          and love to learn about new technologies. Currently, I'm focused on
          getting my first job as a web developer.
        </p>
      </div>
      <img
        className=" rounded-2xl"
        src="https://i.pinimg.com/originals/dc/7b/49/dc7b49b3f913908b7556f8a34c338bd3.gif"
        alt=""
        srcset=""
      />
    </div>
  );
};

export default Intro;
