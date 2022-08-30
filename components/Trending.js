import React from "react";
import Sector from "./Sector";
import Typography from '@mui/material/Typography';


function Trending() {
  return (
    <>
      <div className="py-20 text-center flex justify-center align-center m-auto">
        <div>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
          <div className="flex justify-center flex-wrap gap-12 pt-10">
            <Sector title="FOOD & NUTRITION" />
            <Sector title="AGRICULTURE" />
            <Sector title="AGRICULTURE" />
            <Sector title="AGRICULTURE" />
          </div>
        </div>
      </div>
      <style jsx>
        {`
        `}
      </style>
    </>
  );
}

export default Trending;
