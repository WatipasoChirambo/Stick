import React, {useContext} from "react";
import Package from "./Package";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "@mui/material/Button";
import {AppContext} from "../pages/_app";
import Image from "next/image";
import Guy from "../public/guyy.png";

function Trending() {
  const value = useContext(AppContext)

  return (
    <>
      <div className="relative px-10 pt-20 text-center flex justify-center align-center m-auto">
        <div>
          <div className="grid gap-2 pb-4">
            <Typography variant="subtitle2" color="#248AA3">
              Recommended
            </Typography>
            <Typography variant="h4" gutterBottom>
              Package
            </Typography>
          </div>
          <div className="flex justify-center flex-wrap gap-12 pt-10">
            <Package grade="Grade B" />
          </div>
          <div className="py-14 flex justify-center gap-2">
            <Link href="/Packages">
              <Button variant="outlined" onClick={()=>value.setRoute("Packages")}>
                View All
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-1/2 right-40 -z-10">
          <Image src={Guy} height={100} width={100}/>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default Trending;
