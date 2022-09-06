import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Service from "./Service";
import { allservices } from "../../src/utils/Services/allservices";

function Services() {
  return (
    <Paper className="bg-[#F1EDFF] text-center py-20 grid place-items-center p-10 gap-4 w-full m-auto">
      <div className="text-center">
        <Typography variant="subtitle2" color="#248AA3">
          Offered
        </Typography>
        <Typography variant="h4" gutterBottom>
          Services
        </Typography>
      </div>
      <div className="flex ">
        <div className="flex flex-wrap gap-20 p-4 justify-center">
          {allservices.map((val, index) => (
            <div key={index}>
              <Service title={val.title} icon={val.icon} />
            </div>
          ))}
        </div>
      </div>
    </Paper>
  );
}

export default Services;
