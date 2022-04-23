import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Stack from "./Stack";

function ReMembers() {
  return (
    <>
    <div className="flex justify-between w-full h-96 bg-cyan-600 mt-20 px-10">
      <div>
        SMall Talk
      </div>
      <div className="grid gap-4 mt-4 mb-4">
        <Stack/>
        <Stack/>
        <Stack/>
        <Stack/>
      </div>
    </div>
    </>
  );
}

export default ReMembers;
