import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { FaTwitter, FaFacebook } from "react-icons/fa";

const d = new Date();
let year = d.getFullYear();

function Footer() {
  return (
    <div className="text-center flex pb-8 justify-center px-10 lg:py-12">
      <div>
        <div className="grid place-items-center pt-4">
          <div className="pb-4 text-center">
            <Typography variant="body2" gutterBottom>
            Follow us on
          </Typography>
          <Typography variant="h4" gutterBottom>
            Social Media
          </Typography>
          </div>
          <div className="flex gap-4">
            <FaFacebook color="#2563EB" size={20}/>
            <FaTwitter color="#2563EB" size={20}/>
          </div>
        </div>
        <div className="pt-10">
          <div className="flex justify-center">
            <Image src="/logo.png" height={100} width={170} />
          </div>
          <div>
            <Typography variant="subtitle1" gutterBottom>
              COPYRIGHT &copy; {year} ATAMEJE DRIVING SCHOOL - ALL RIGHTS
              RESERVED.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
