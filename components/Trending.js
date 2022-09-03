import React from "react";
import Package from "./Package";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "@mui/material/Button";

function Trending() {
  return (
    <>
      <div className="px-10 py-20 text-center flex justify-center align-center m-auto">
        <div>
          <div className="grid gap-2 pb-4">
            <Typography variant="body2" gutterBottom>
              most purchased
            </Typography>
            <Typography variant="h4" gutterBottom>
              Packages
            </Typography>
          </div>
          <div className="flex justify-center flex-wrap gap-12 pt-10">
            <Package grade="Grade B" />
            <Package grade="Grade C" />
            <Package grade="Grade D" />
          </div>
          <div className="py-14 flex justify-center gap-2">
            <Link href="/Packages">
              <Button variant="outlined">
                View All
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default Trending;
