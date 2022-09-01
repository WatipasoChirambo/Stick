import React from "react";
import Image from "next/image";
import Why from "../images/why.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

function Stack({ title }) {
  return (
    <div>
      <Image src={Why} className="rounded-full" height={100} width={100} />
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <div className="">
        <div className="">
          <Typography variant="caption" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        </div>
      </div>
    </div>
  );
}

export default Stack;
