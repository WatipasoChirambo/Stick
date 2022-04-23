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
        <div className="pt-28 flex flex-wrap gap-4 relative w-[500px]">
          <h4 className="text-3xl font-semibold text-white">
            <span className="border-b-4 border-orange-500">
            WHY <br></br> NEC?
            </span>
          </h4>
          <div>
            <Image src={Why} height={300} width={300} />
          </div>
          <div className="bg-[#2F4858] opacity-90 h-auto w-[320px] absolute top-48 p-2 text-white mt-12">
            <p className="text-sm z-96">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.Aliquam magna metus, elementum vitae sem eget,
              iaculis varius mi. Donec vel elementum arcu.
              Donec porta lorem varius mauris semper,
              et cursus orci placerat.
            </p>
          </div>
        </div>
        <div className="grid mt-16 mb-4 ">
          <Stack title="Availability" />
          <Stack title="Client Focus" />
          <Stack title="Goal Driven" />
          <Stack title="Availability" />
        </div>
      </div>
    </>
  );
}

export default ReMembers;
