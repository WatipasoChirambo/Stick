import React from "react";
import Map from "./Map";
import Typography from "@mui/material/Typography";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

function Brief() {
  return (
    <div className="grid place-items-center px-10 py-10 md:flex lg:flex gap-6 px-10">
      <div className="grid gap-2 lg:flex gap-10 justify-between">
        <div className="grid gap-2">
          <div>
            <div>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
            </div>
            <div className="grid gap-2">
              <div className="flex gap-2">
                <FaPhone />
                <Typography variant="caption">+265999 95 83 36</Typography>
              </div>
              <div className="flex gap-2">
                <FaEnvelope />
                <Typography variant="caption">gladyschagunda@yahoo.com</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brief;
