import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Typography from "@mui/material/Typography";
import Stack from "./Stack";

function ReMembers() {
  return (
    <>
<<<<<<< HEAD
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
=======
      <div className="lg:flex justify-between w-full lg:h-[550px] bg-[#2F4858] mt-20 px-10">
        <div className="lg:pt-28 lg:flex flex-wrap gap-4 relative lg:w-[500px] pt-8">
          <h4 className="text-3xl font-bold text-white text-center mb-4">
            <span className="border-b-4 border-orange-500">
            WHY <br></br> NEC?
            </span>
          </h4>
          <div className="h-38">
            <Image src={Why}/>
          </div>
          <div className="bg-[#2F4858] opacity-90 h-auto lg:w-[320px] lg:absolute lg:top-48 p-2 text-white mt-4">
            <p className="text-sm z-96">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.Aliquam magna metus, elementum vitae sem eget,
              iaculis varius mi. Donec vel elementum arcu.
              Donec porta lorem varius mauris semper,
              et cursus orci placerat.
            </p>
>>>>>>> 03b53ae8ccdc184552e0045231040607ae5f0cbe
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default ReMembers;
