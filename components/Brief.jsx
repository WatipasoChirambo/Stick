import React from "react";
import Typography from "@mui/material/Typography";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

function Brief() {
  return (
    <div className="flex justify-center px-10 py-10 md:flex lg:flex gap-6 px-10 justify-center items-center">
      <div className="w-[50%]">
        <Typography variant="body2" gutterBottom>
          Fully qualified driving instructors in and around Malawi. With
          attractive and competitive lesson fees to get you on the road.
          Friendly and helpful staff to book you in or address any queries or
          concerns you may have.
        </Typography>
      </div>
      <div className="grid gap-2">
        <div className="w-48">
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
        </div>
        <div className="w-48 grid gap-2">
          <div className="flex gap-2">
            <FaPhone />
            <Typography variant="caption">+265995963429</Typography>
          </div>
          <div className="flex gap-2">
            <FaEnvelope />
            <Typography variant="caption">info@gmail.com</Typography>
          </div>
          <div className="flex gap-2">
            <FaGlobe />
            <Typography variant="caption">www.atameje.com</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brief;
