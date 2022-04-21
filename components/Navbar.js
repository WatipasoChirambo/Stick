import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { FaLinkedinIn, FaFacebook, FaTwitter,FaInstagram } from 'react-icons/fa';



function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-between fixed top-0 px-10 py-6 w-full text-black bg-white opacity-90">
      <div className="md:flex gap-20">
        <div className="md:flex gap-4">
          <div className="md:flex gap-2">
            <div className="flex gap-2 w-full">
              <div className="flex gap-2 w-full">
                <h1 className="text-4xl">Logo</h1>
              </div>
              <div className="lg:flex justify-around gap-4 align-center">
                <MdMenu
                  className="lg:hidden"
                  size={40}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            toggle
              ? "hidden h-screen z-20 text-center text-black p-4 m-2"
              : "hidden md:visible lg:flex gap-5 text-center text-black"
          }
        >
          <h3>Services</h3>
          <h3>industry Sectors</h3>
          <h3>Projects</h3>
          <h3>News</h3>
          <h3>Contact</h3>
          <h3>About Us</h3>
        </div>
      </div>
      <div className="flex gap-4">
        <FaLinkedinIn/>
        <FaFacebook/>
        <FaInstagram/>
        <FaTwitter/>
      </div>
    </nav>
  );
}

export default Navbar;
