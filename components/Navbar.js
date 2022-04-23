import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { FaLinkedinIn, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image'


function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-between items-center fixed top-0 px-10 h-[90px] items-center w-full text-black bg-white border-solid border-2">
      <div className="flex justify-between gap-12 md:flex">
        <div className="flex justify-between md:flex gap-4">
          <div className="flex justify-between md:flex gap-2">
            <Image
              src="/logo.png"
              alt="Picture of the author"
              width={70}
              height={70}
            />
          </div>
        </div>
        <div
          className={
            toggle
              ? "h-screen z-20 align-center items-center text-center text-black"
              : "hidden flex items-center md:visible lg:flex gap-5 text-center text-black"
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
      <div className="hidden lg:flex gap-4">
        <FaTwitter size={25} />
        <FaFacebook size={25} />
        <FaInstagram size={25} />
        <FaLinkedinIn size={25} />
      </div>
      <div className="lg:hidden">
        <MdMenu
          size={40}
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
