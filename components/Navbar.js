import React, { useState, useEffect,useContext } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { NavItems } from "../src/utils/routes";
import Link from "next/link";
import Button from "@mui/material/Button";
import {phone} from '../components/Hero' 
import {AppContext} from "../pages/_app";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const value = useContext(AppContext)

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
            ? "z-20 fixed top-0 px-10 bg-white w-full text-blue-500 border border-solid"
            : "z-20 fixed top-0 px-10 w-full text-white"
        }
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-12">
            <Image src="/logo.png" height={100} width={170} />
            <div className="hidden lg:flex gap-6">
              {NavItems.map((val, index) => (
                <div key={index} onClick={() => value.setRoute(val.title)}>
                  <Typography variant="caption" gutterBottom className={value.route === val.title && "underline scale-75"}>
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
            <div className="hidden lg:flex gap-8 items-center">
              <div className="flex gap-2">
                <FaPhone />
                <Typography variant="caption" gutterBottom>
                  +265999 95 83 36
                </Typography>
              </div>
              <div className="flex gap-2">
                <FaEnvelope />
                <Typography variant="caption" gutterBottom>
                  gladyschagunda@yahoo.com
                </Typography>
              </div>
              <div className="flex items-center">
                <a href={`tel:+${phone}`}>
                  <Button variant="outlined" color="error">
                    Call Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {toggle && (
          <div className="bg-[#839FFF] text-white grid gap-4 text-center p-10 bg-opacity-92">
            {NavItems.map((val, index) => (
              <div key={index} onClick={() => value.setRoute(val.title)}>
                <Typography variant="caption" gutterBottom className={value.route === val.title && "underline scale-75"}>
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
