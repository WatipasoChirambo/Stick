import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function ReMembers() {
  return (
    <>
      <div className="px-10 pt-10">
        <h3 className="text-xl lg:text-3xl font-semibold">Trending Producers</h3>
        <div className="pt-2 w-full">
          <Splide options={ {
    rewind: true,
    arrows:false,
    autoWidth : true,
    gap   : 8,
    breakpoints: {
        640: {
            perPage: 1,
        },
    },
    perPage:3
  } } aria-label="React Splide Example">
            <SplideSlide>
              <div className="rounded-full  h-40 w-40 bg-slate-900"></div>
              <h3 className="font-semibold">Title</h3>
              <p>Bam Bam</p>
            </SplideSlide>
            <SplideSlide>
              <div className="rounded-full  h-40 w-40 bg-slate-900"></div>
              <h3 className="font-semibold">Title</h3>
              <p>Bam Bam</p>
            </SplideSlide>
            <SplideSlide>
              <div className="rounded-full h-40 w-40 bg-slate-900"></div>
              <h3 className="font-semibold">Title</h3>
              <p>Bam Bam</p>
            </SplideSlide>
            <SplideSlide>
              <div className="rounded-full h-40 w-40 bg-slate-900"></div>
              <h3 className="font-semibold">Title</h3>
              <p>Bam Bam</p>
            </SplideSlide>
            <SplideSlide>
              <div className="rounded-full h-40 w-40 bg-slate-900"></div>
              <h3 className="font-semibold">Title</h3>
              <p>Bam Bam</p>
            </SplideSlide>
            <SplideSlide>
              <div className="rounded-full h-40 w-40 bg-slate-900"></div>
              <h3 className="font-semibold">Title</h3>
              <p>Bam Bam</p>
            </SplideSlide>
            <SplideSlide>
              <div className="rounded-full h-40 w-40 bg-slate-900"></div>
              <h3 className="font-semibold">Title</h3>
              <p>Bam Bam</p>
            </SplideSlide>
            <SplideSlide>
              <div className="rounded-full h-40 w-40 bg-slate-900"></div>
              <h3 className="font-semibold">Title</h3>
              <p>Bam Bam</p>
            </SplideSlide>
            <SplideSlide>
              <div className="rounded-full h-40 w-40 bg-slate-900"></div>
              <h3 className="font-semibold">Title</h3>
              <p>Bam Bam</p>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </>
  );
}

export default ReMembers;
