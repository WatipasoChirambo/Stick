import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Typography from "@mui/material/Typography";
import Stack from "./Stack";

function ReMembers() {
  return (
    <>
      <div className="py-20 text-center flex justify-center bg-[#2563EB] align-center m-auto">
        <div className="p-4">
          <div className="grid gap-2 pb-4">
            <Typography variant="body2" gutterBottom color="silver">
            Our Customers
          </Typography>
          <Typography variant="h4" gutterBottom color="white">
            Testimonials
          </Typography>
          </div>
          
          <div className="py-10">
            <Splide
            
              options={{
                rewind: true,
                autoplay:true,
                perPage: 2,
                perMove: 2,
                arrows:false,
                gap: 10,
                padding:1,
                focus:'center',
                pagination: true,
                easing:'ease',
                breakpoints: {
                  623: {
                    perPage: 1,
                    perMove: 1,
                    padding: 0,
                  },
                  935: {
                    perPage: 2,
                    perMove: 2,
                  },
                  1247: {
                    perPage: 4,
                    perMove: 4,
                  },
                },
              }}
            >
              <SplideSlide>
                <Stack />
              </SplideSlide>
              <SplideSlide>
                <Stack />
              </SplideSlide>
              <SplideSlide>
                <Stack />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default ReMembers;
