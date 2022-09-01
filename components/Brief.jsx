import React from "react";
import Typography from "@mui/material/Typography";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import Image from "next/image";

function Brief() {
  return (
    <div className="grid place-items-center px-10 py-10 md:flex lg:flex gap-6 px-10 justify-center">
      <Typography variant="body2" gutterBottom>
        Fully qualified driving instructors in and around Malawi. With
        attractive and competitive lesson fees to get you on the road. Friendly
        and helpful staff to book you in or address any queries or concerns you
        may have.
      </Typography>
      <div>
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <div>
          <div className="flex gap-2">
            <FaPhone />
            <Typography variant="caption">Contact Us</Typography>
          </div>
          <div className="flex gap-2">
            <FaEnvelope />
            <Typography variant="caption">Contact Us</Typography>
          </div>
          <div className="flex gap-2">
            <FaGlobe />
            <Typography variant="caption">Contact Us</Typography>
          </div>
        </div>
        <div>
          <Image src="/logo.png" height={150} width={220} />
        </div>
      </div>
    </div>
  );
}

export default Brief;
