import React,{useContext} from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import {AppContext} from "../pages/_app";
import { Year } from '../src/utils/Year/year'



function Footer() {
  const value = useContext(AppContext)

  return (
    <div className="text-center flex pb-8 justify-center px-10 lg:py-12">
      <div>
        <div className="grid place-items-center pt-4">
          <div className="pb-4 text-center">
            <Typography variant="body2" gutterBottom color={value.route == "Packages" ? "whitesmoke":"blueviolet"}>
              Follow us on
            </Typography>
            <Typography variant="h4" gutterBottom>
              Social Media
            </Typography>
          </div>
          <div className="flex gap-4">
            <FaFacebook color="#2563EB" size={20} />
            <FaTwitter color="#2563EB" size={20} />
          </div>
        </div>
        <div className="pt-10">
          <div className="flex justify-center">
            <Image src="/logo.png" height={100} width={170} />
          </div>
          <div>
            <Typography variant="caption">PO BOX 30163, Blantyre, Malawi</Typography>
            <Typography variant="subtitle2" gutterBottom>
              &copy; {Year} ATAMEJE DRIVING SCHOOL
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
