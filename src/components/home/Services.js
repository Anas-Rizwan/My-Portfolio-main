import React from "react";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect";

const Services = () => {
  const projects = [
    {
      id: 1,
      name: "HTML, CSS and Javascript websites",
      description:
        "I can develop a website with only HTML, CSS and raw Javascript. I've built a few websites using only HTML, CSS or HTML, CSS and Javascript",
      src: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
      id: 2,
      name: "React websites",
      description:
        "I can develop a website using Javscript Framework(ReactJS).Have experienced with different React libraries like react router, Firebase Authentication, etc tools. I've built a few websites using ReactJS, Firebase, React Hook Forms, etc.",
      src: "https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
      id: 3,
      name: "MERN websites",
      description:
        "I can develop a Mern-stack e-commerce website using MongoDB, ExpressJS, ReactJS, NodeJS, Stripe, etc tools. I've built a few websites using MERN stack.",
      src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80"

    },
    {
      id: 4,
      name: "Cross-Platform Mobile Apps",
      description:
        "I can develop a Cross-Platform Mobile Apps Javscript Framework(React Native).I can integrate many different React Native libraries like Navigation, Authentication, etc tools. I've built a few Apps using React Native, React Hook Forms, etc.",
      src: "https://images.pexels.com/photos/243698/pexels-photo-243698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
  ];
  return (
    <>
      <Fade left cascade>

        <div className="my-5 mx-5 text-black">
          <h1 className="text-5xl font-serif font-bold text-center my-2" style={{color:"white"}}>
            Services
          </h1>
          <h1 className="lg:text-4xl text-xl font-extrabold text-blue-600 font-mono ml-5 my-5" style={{color:"white"}}>
            <Typewriter
              options={{
                strings: ["What Roles I Can Play In Your Team..."],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {
              projects.map((item) => {
                return (

                  <div key={item.id} className="card sm:w-full bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-red-800  image-full my_services">
                    <figure>
                      <img
                        src={item.src}
                        alt="serviceImage"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="text-3xl text-white font-bold ">
                        {item.name}
                      </h2>
                      <h1 className="text-xl text-white">{item.description}</h1>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </Fade>

    </>
  );
};

export default Services;
