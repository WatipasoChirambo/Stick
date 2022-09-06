import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Typography from "@mui/material/Typography";
import Package from "../components/Package";

function Packages() {
  return (
    <div className="grid gap-4 bg-[#35383D]">
      <Navbar />
      <div className="py-10 px-10 mt-28">
        <div className="text-center py-6 mb-2">
        <Typography variant="subtitle2" gutterBottom color="#6F6C9F">
            Pick a
          </Typography>
          <Typography variant="h3" gutterBottom color="whitesmoke">
            Package
          </Typography>
        </div>
        <div className="grid place-items-center">
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <Package grade="Grade B" />
            <Package grade="Grade C" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Packages;
