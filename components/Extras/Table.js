import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { studentRequirements } from "../../src/utils/roadtraffic/studentRequirements";

export default function MTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        minWidth: 280,
        width: 400,
      }}
    >
      <Table aria-label="Requirements table">
        <TableBody>
          {studentRequirements.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.requirement}
              </TableCell>
              <TableCell align="right">MWK {row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
