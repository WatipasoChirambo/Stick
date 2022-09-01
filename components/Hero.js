import React from "react";
import { GiDrumKit, GiSaxophone, GiMusicalKeyboard } from 'react-icons/gi';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Hero() {
  return (
    <>
      <div className="flex justify-center text-center wrapper px-10 items-center h-screen">
        <div className="items-center text-white">
          <div>
          <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
              <div className="flex justify-center gap-2 pt-8">
              <Button variant="contained">Contained</Button>
              </div>
          </div>
        </div>
      </div>
      <style jsx>
      {`
        .wrapper{
            background:url("hero.jpg");
            background-color: rgba(0, 0, 80, 0.60); /* use rgba for fine adjustments */
  background-blend-mode: multiply;
            background-size:cover;
        }
      `}
      </style>
    </>
  );
}
export default Hero;
