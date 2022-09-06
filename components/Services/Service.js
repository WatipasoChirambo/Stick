import React,{ memo } from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function Service({ title, icon }) {
  return (
    <div className="w-[250px] flex flex-col items-center">
      <div className="flex gap-2">
        <Image src={icon} height={60} width={60} />
      </div>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
      </div>
    </div>
  );
}

export default memo(Service);
