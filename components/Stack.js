import React from "react";
import Image from "next/image";
import Why from "../images/why.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

function Stack({ title }) {
  return (
    <div className="">
      <Image src={Why} className="rounded-full" height={100} width={100} />
      <Typography variant="subtitle1" gutterBottom>
        h5. Heading
      </Typography>
      <div className="">
          <Typography variant="caption">
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing eli
        </Typography>
      </div>
    </div>
  );
}

export default Stack;
