import React, { useContext,memo } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {phone} from './Hero'



function createData(lessons, price) {
  return { lessons, price };
}

const rows = [
  createData(159, 6.0),
  createData(237, 9.0),
  createData(262, 16.0),
  createData(305, 3.7),
  createData(356, 16.0),
];
("");

function Package({ grade }) {

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          minWidth: 280,
          width: 300,
          paddingTop: 2,
          background: "#D7EFF7",
          paddingBottom: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          {grade}
        </Typography>
        <Table aria-label="Grade B table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant="subtitle1" gutterBottom>
                  Lessons
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1" gutterBottom>
                  Price
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.lessons}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="pt-6">
          <a href={`tel:+${phone}`}>
            <Button variant="contained" color="secondary">
              Book Package
            </Button>
          </a>
        </div>
      </TableContainer>
    </>
  );
}

export default memo(Package)
