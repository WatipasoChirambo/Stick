import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { FaStar } from "react-icons/fa";

function Stack({ title }) {
  return (
    <div className="p-2 rounded-md h-40 grid place-items-center bg-gray-500">
        <div>
          <Typography variant="subtitle1" gutterBottom>
            h5. Heading
          </Typography>
          <div className="">
            <Typography variant="caption">
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
