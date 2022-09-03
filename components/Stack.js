import React from "react";
import Image from "next/image";
import Why from "../images/why.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

function Stack({ title }) {
  return (
    <div className="p-2 border-2 rounded-md h-40 grid place-items-center">
        <div>
          <Typography variant="subtitle1" gutterBottom>
            h5. Heading
          </Typography>
          <div className="">
            <Typography variant="caption">
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing eli
            </Typography>
          </div>
        </div>
    </div>
  );
}

export default Stack;
