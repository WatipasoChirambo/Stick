import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Typography from "@mui/material/Typography";
import Stack from "./Stack";

function ReMembers() {
  return (
    <>
      <div className="py-20 text-center flex justify-center bg-blue-600 align-center m-auto">
        <div>
          <Typography variant="body2" gutterBottom>
            words from our Customers
          </Typography>
          <Typography variant="h4" gutterBottom>
            Testimonials
          </Typography>
          <div className="py-10">
            <Splide
              options={{
                rewind: false,
                perPage: 3,
                perMove: 3,
                gap: 30,
                padding: "1rem",
                pagination: false,
                breakpoints: {
                  623: {
                    perPage: 1,
                    perMove: 1,
                  },
                  935: {
                    perPage: 3,
                    perMove: 3,
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
