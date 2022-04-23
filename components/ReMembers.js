import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Stack from "./Stack";
import Image from 'next/image'
import Why from '../images/why.png'

function ReMembers() {
  return (
    <>
      <div className="flex justify-between w-full h-[550px] bg-[#2F4858] mt-20 px-10">
        <div className="pt-28 flex gap-4 relative w-[500px]">
          <h4 className="text-3xl font-semibold text-white">
            WHY <br></br> NEC?
          </h4>
          <div>
            <Image src={Why} height={350} width={350} />
          </div>
          <div className="bg-[#2F4858] opacity-80 h-20 border absolute top-48 p-2 text-white mt-4">
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.Aliquam magna metus, elementum vitae sem eget,
              iaculis varius mi. Donec vel elementum arcu.
              Donec porta lorem varius mauris semper,
              et cursus orci placerat.
            </p>
          </div>
        </div>
        <div className="grid gap-4 mt-4 mb-4">
          <Stack />
          <Stack />
          <Stack />
          <Stack />
        </div>
      </div>
    </>
  );
}

export default ReMembers;
