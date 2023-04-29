import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-black text-white shadow-xl shadow-black w-full" >
        <div>
          <div className="social">
            <a href="https://www.facebook.com/AnasRzwan">
              <BsFacebook className="social_icon_fb" />
            </a>
            <a href="https://www.linkedin.com/in/anas-rizwan-57a513196/">
              <BsLinkedin className="social_icon_li" />
            </a>

            <a href="https://github.com/Anas-Rizwan">
              <BsGithub className="social_icon_git" />
            </a>

          </div>
        </div>

        <div className="right_reserved">
          <BiCopyright />
          <p className="font-bold"  style={{color:"white"}}>All rights reserved by Muhammad Anas Rizwan</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
