import React from "react";
import Package from "./Package";
import Typography from '@mui/material/Typography';


function Trending() {
  return (
    <>
      <div className="px-10 py-20 text-center flex justify-center align-center m-auto">
        <div>
        <Typography variant="subtitle2" gutterBottom>
          choose from our
        </Typography>
        <Typography variant="h5" gutterBottom>
        Packages
      </Typography>
          <div className="flex justify-between flex-wrap gap-12 pt-10">
            <Package grade="Grade B"/>
            <Package grade="Grade C"/>
            <Package grade="Grade D"/>
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
