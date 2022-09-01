import React, { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import {
  FaLinkedinIn,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { NavItems } from "../src/utils/routes";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const toggleNav = () => {
    setToggle(!toggle);
  };

  const changeNavBg = () => {
    window.scrollY >= 120 ? setNavBg(true) : setNavBg(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <>
      <nav
        className={
          navBg
            ? "z-20 fixed top-0 px-10 bg-white w-full text-blue-500 border border-dotted bg-opacity-80"
            : "z-20 fixed top-0 px-10 w-full text-white"
        }
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-12">
            <Image src="/logo.png" height={100} width={170} />
            <div className="hidden lg:flex gap-6">
              {NavItems.map((val) => (
                <div key={val}>
                  <Typography variant="caption" gutterBottom>
                    {val}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center ">
            <div className="lg:hidden">
              <MdMenu size={45} onClick={toggleNav} />
            </div>
            <div className="hidden lg:flex gap-4 items-center">
              <FaTwitter
                size={15}
                className={navBg ? "text-blue-500" : "text-white"}
              />
              <FaFacebook
                size={15}
                className={navBg ? "text-blue-500" : "text-white"}
              />
              <FaInstagram
                size={15}
                className={navBg ? "text-blue-500" : "text-white"}
              />
              <FaLinkedinIn
                size={15}
                className="text-blue-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
        {toggle && (
          <div className="bg-blue-500 text-white grid gap-4 text-center p-10 bg-opacity-90">
            {NavItems.map((val) => (
              <div key={val}>
                <Typography variant="caption" gutterBottom>
                  {val}
                </Typography>
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
