import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Typography from "@mui/material/Typography";
import Stack from "./Stack";

function ReMembers() {
  return (
    <>
      <div className="px-10 py-12 text-center flex justify-center align-center">
        <div>
          <div className="grid gap-2 pb-4">
            <Typography variant="subtitle2" gutterBottom color="#6F6C9F">
            Customer
          </Typography>
          <Typography variant="h4" gutterBottom>
            Testimonials
          </Typography>
          </div>
          <div className="py-10">
            <Splide
              options={{
                rewind: true,
                autoplay:true,
                perPage: 2,
                perMove: 1,
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
                    perPage: 2,
                    perMove: 2,
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
