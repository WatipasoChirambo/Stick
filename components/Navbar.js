import React, { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { NavItems } from "../src/utils/routes";
import Link from "next/link";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [route, setRoute] = useState("");

  useEffect(() => {
    console.log(route);
  }, [route]);

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
              {NavItems.map((val, index) => (
                <div key={index} onClick={() => setRoute(val.title)}>
                  <Typography variant="caption" gutterBottom>
                    <Link href={val.link}>{val.title}</Link>
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center ">
            <div className="lg:hidden">
              {toggle ? (
                <MdClose size={35} onClick={toggleNav} />
              ) : (
                <MdMenu size={35} onClick={toggleNav} />
              )}
            </div>
            <div className="hidden lg:flex gap-4 items-center">
              <div className="flex gap-2">
                <FaPhone />
                <Typography variant="caption" gutterBottom>
                  +265995963429
                </Typography>
              </div>
              <div className="flex gap-2">
                <FaEnvelope/>
                <Typography variant="caption" gutterBottom>
                info@gmail.com
              </Typography>
              </div>
            </div>
          </div>
        </div>
        {toggle && (
          <div className="bg-blue-500 text-white grid gap-4 text-center p-10 bg-opacity-90">
            {NavItems.map((val, index) => (
              <div key={index} onClick={() => setRoute(val.title)}>
                <Typography variant="caption" gutterBottom>
                  <Link href={val.link}>{val.title}</Link>
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
