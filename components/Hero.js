import React from "react";
import { GiDrumKit, GiSaxophone, GiMusicalKeyboard } from 'react-icons/gi';
import Button from "./Button";

function Hero() {
  return (
    <>
      <div className="wrapper px-10 items-center h-[550px]">
        <div className="items-center text-white pt-[40px]">
          <div className=" pt-28">
              <h2 className="tracking-wider pt-24 text-5xl font-black bold lg:text-6xl pt-2 bold"> <span>N</span>yasa <br></br> Engineering <br></br> Consultancy LTD.</h2>
              <p className="text-xs pt-3 lg:text-sm">
              START YOUR COMPLETE PROJECT CYCLE WITH US
              </p>
              <div className="flex gap-2 pt-2">
              <Button text="DONWLOAD PORTFOLIO"/>
              </div>
          </div>
        </div>
      </div>
      <style jsx>
      {`
        .wrapper{
            background:url("hero.png");
            background-size:cover;
        }
      `}
      </style>
    </>
  );
}

export default Hero;
