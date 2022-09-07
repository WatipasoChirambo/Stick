import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import MTable from "./Table";

function Requirements() {
  return (
    <div
      className="px-10 py-20 bg-fixed bg-cover bg-left"
      style={{ backgroundImage: "url('etras.png')" }}
    >
      <div className="grid text-center p-4">
        <Typography variant="subtitle2" color="#6F6C9F">
          Test And Road Traffic
        </Typography>
        <Typography variant="h4" gutterBottom>
          Requirements
        </Typography>
      </div>
      <div className="flex justify-center py-5">
        <MTable />
      </div>
    </div>
  );
}

export default Requirements;
