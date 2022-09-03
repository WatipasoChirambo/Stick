import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";

const d = new Date();
let year = d.getFullYear();

function Footer() {
  return (
    <div className="pb-8 flex justify-center px-10 lg:py-12">
      <div>
        <div className="flex justify-center">
          <Image src="/logo.png" height={100} width={170} />
        </div>
        <div>
        <Typography variant="subtitle1" gutterBottom>
            &copy;Atameje Driving School {year}
          </Typography>
          </div>
      </div>
    </div>
  );
}

export default Footer;
