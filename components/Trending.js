import React from "react";
import Sector from "./Sector";


function Trending() {
  return (
    <>
      <div className="px-10 pt-8">
        <h3 className="text-center text-xl lg:text-3xl font-bold">INDUSTRY SECTORS</h3>
        <div className="flex flex-wrap gap-14 pt-10">
          <Sector title="FOOD & NUTRITION"/>
          <Sector title="AGRICULTURE"/>
          <Sector title="INFORMATION TECHNOLOGY"/>
          <Sector title="HEALTH"/>
          <Sector title="INDUSTRIAL HUB"/>
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
