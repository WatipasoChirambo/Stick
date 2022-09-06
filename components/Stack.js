import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { FaStar } from "react-icons/fa";

function Stack({ title }) {
  return (
    <div className="rounded-md h-56 grid place-items-center bg-black">
        <div>
          <Typography variant="subtitle1" gutterBottom color="white">
            h5. Heading
          </Typography>
          <div className="">
            <Typography variant="subtitle1">
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing eli
            </Typography>
          </div>
          <div className="flex justify-center">
            <FaStar color="gold"/>
          </div>
        </div>
    </div>
  );
}

export default Stack;
