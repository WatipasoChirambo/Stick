import React from "react";
import OtherNav from "../components/OtherNav";
import Footer from "../components/Footer";
import Typography from "@mui/material/Typography";
import Package from "../components/Package";

function Packages() {
  return (
    <div className="grid gap-4">
      <OtherNav />
      <div className="py-10 px-10">
        <div className="text-center py-6">
            <Typography variant="h3" gutterBottom>
          Packages
        </Typography>
        </div>
        <div className="grid place-items-center">
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <Package grade="Grade A"/>
            <Package grade="Grade B"/>
            <Package grade="Grade C"/>
            <Package grade="Grade D"/>
            <Package grade="Grade E"/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Packages;
