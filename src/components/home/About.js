import React from 'react';
import { Fade } from 'react-reveal';
import Flash from 'react-reveal/Flash';
import fuadimg from './fuadimg.jpg'

const About = () => {
    return (
        <div className="hero py-10 mb-10" id='about'>
        <div className="hero-content flex-col lg:flex-row">
        <Flash>
          {/* <img className='w-[400px] rounded-2xl ' src={fuadimg} alt='' /> */}
          </Flash>
          <Fade right cascade>
          <div>
          <h1 className="text-5xl font-bold text-black" style={{color:"white"}}>About me</h1>
            <p className="py-6 text-xl text-black" style={{color:"white"}}>I'm from Karachi, Pakistan. I'm a 3rd year student and pursuing my Bachelors in Computer Science from University of Karachi(UBIT). I'm learning Mern-stack web development, love to build more and more new projects and upgrade them.</p>
            <a href='https://drive.google.com/file/d/1LFxWAJsjI626p0uD9vGiddqNd-1gzFD7/view?usp=sharing'><button className="btn btn-secondary">My Resume</button></a>
          </div></Fade>
        </div>
      </div>
    );
};

export default About;