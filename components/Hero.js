import React from "react";
import { GiDrumKit, GiSaxophone, GiMusicalKeyboard } from "react-icons/gi";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const phone = 265999958336

function Hero() {

  

  return (
    <>
      <div className="flex justify-center text-center wrapper px-10 items-center h-screen">
        <div className="flex justify-center text-white">
          <div className="lg:w-[70%]">
            <Typography variant="h2" gutterBottom>
              <span className="text-[#BFA5A4]">Learn</span> From The{" "}
              <span className="text-[#DC003E]">Best</span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Become a confident and safe driver
            </Typography>
            <div className="flex justify-center gap-2 pt-8">
              <a href={`tel:+${phone}`}>
                <Button variant="contained" color="primary">
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .wrapper {
            background: url("hero.jpg") center;
            background-color: rgba(
              0,
              0,
              80,
              0.8
            ); /* use rgba for fine adjustments */
            background-blend-mode: multiply;
            background-size: cover;
          }
        `}
      </style>
    </>
  );
}
export default Hero;
