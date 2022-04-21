import React from "react";
import { GiDrumKit, GiSaxophone, GiMusicalKeyboard } from 'react-icons/gi';
import { HeroButton } from "../components/HeroButton";

function Hero() {
  return (
    <>
      <div className="wrapper px-10 h-90">
        <div className="mt-28 text-white pt-5 lg:mt-20">
          <div className="tracking-wider text-4xl font-black">
              <h2 className="text-5xl lg:text-6xl pt-2">Nyasa <br></br> Engineering <br></br> Consultancy LTD.</h2>
              <p className="text-sm pt-2">
              Discover over 5 million beats to write your next song to
              </p>
              <div className="flex gap-2 pt-2">
              <GiMusicalKeyboard size={50} className="text-green-400"/>
              <GiSaxophone size={50} className="text-green-400"/>
              <GiDrumKit size={50} className="text-green-400"/>
              </div>
          </div>
        </div>
      </div>
      <style jsx>
      {`
        .wrapper{
            background:linear-gradient(0deg, black, rgba(255, 0, 150, 0.3)), url("hero.jpg");
            background-size:cover;

        }
      `}
      </style>
    </>
  );
}

export default Hero;
