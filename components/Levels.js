import React from "react";
import Typography from "@mui/material/Typography";

function Levels() {
  return (
    <div className="flex gap-10 bg-black-600 justify-center items-center p-14">
      <div className="grid place-items-center text-center">
        <Typography variant="h5" gutterBottom>
          300+
        </Typography>
        <Typography variant="body2">
          5* Reviews
        </Typography>
      </div>
      <div className="grid place-items-center text-center">
        <Typography variant="h5" gutterBottom>
          10
        </Typography>
        <Typography variant="body2">
          Years Experience
        </Typography>
      </div>
      <div className="grid place-items-center text-center">
        <Typography variant="h5" gutterBottom>
          1,000+
        </Typography>
        <Typography variant="body2">
          Successful Students
        </Typography>
      </div>
    </div>
  );
}

export default Levels;
