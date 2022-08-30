import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Typography from '@mui/material/Typography';
import Stack from "./Stack";
import Image from 'next/image'
import Why from '../images/why.png'
import Grid from '@mui/material/Unstable_Grid2';

function ReMembers() {
  return (
    <>
    <div className="py-20 text-center flex justify-center bg-orange-600 align-center m-auto">
        <div>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
          <div className="flex justify-center flex-wrap gap-12 pt-10">
            <Stack/>
            <Stack/>
            <Stack/>
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

export default ReMembers;
