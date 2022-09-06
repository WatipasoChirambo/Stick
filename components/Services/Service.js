import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function Service({ title, icon }) {
  return (
    <div className="w-[250px] flex flex-col items-center">
      <div className="flex gap-2">
        <Image src={icon} height={50} width={50} />
      </div>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
      </div>
    </div>
  );
}

export default Service;
