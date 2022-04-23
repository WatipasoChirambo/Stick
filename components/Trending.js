import React from "react";
import Sector from "./Sector";


function Trending() {
  return (
    <>
      <div className="px-10 pt-8 flex justify-center m-auto">
        <div>
          <h3 className="text-center text-xl lg:text-3xl font-black w-[215px] font-bold border-b-4 m-auto lg:w-[300px] border-orange-500">INDUSTRY SECTORS</h3>
          <div className="flex flex-wrap gap-12 pt-10">
            <Sector title="FOOD & NUTRITION" />
            <Sector title="AGRICULTURE" />
            <Sector title="INFORMATION TECHNOLOGY" />
            <Sector title="HEALTH" />
            <Sector title="INDUSTRIAL HUB" />
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
