import React from "react";
import Typography from "@mui/material/Typography";

function Levels() {
  return (
    <div className="flex gap-10 bg-[#141516] justify-center items-center p-14 text-white">
      <div className="grid place-items-center text-center">
        <Typography variant="h3" gutterBottom>
          200+
        </Typography>
        <Typography variant="body1">
          5* Reviews
        </Typography>
      </div>
      <div className="grid place-items-center text-center">
        <Typography variant="h3" gutterBottom>
          8
        </Typography>
        <Typography variant="body1">
          Years Experience
        </Typography>
      </div>
      <div className="grid place-items-center text-center">
        <Typography variant="h3" gutterBottom>
          800+
        </Typography>
        <Typography variant="body1">
          Successful Students
        </Typography>
      </div>
    </div>
  );
}

export default Levels;
