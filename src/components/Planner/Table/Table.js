import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import "tachyons";
import TableMenu from "./TableMenu/TableMenu.js";
import "./Table.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Explain the key concepts of the Software Design process and demonstrate how the essential design principles are applied within it",
    "Explain the key concepts of the Software Design process and demonstrate how the essential design principles are applied within it",
    "Explain the key concepts of the Software Design process and demonstrate how the essential design principles are applied within it",
    "Explain the key concepts of the Software Design process and demonstrate how the essential design principles are applied within it",
    "Explain the key concepts of the Software Design process and demonstrate how the essential design principles are applied within it"
  ),
  createData("Ice cream sandwich", 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  return (
    <div className="ma3">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell
                style={{
                  paddingBottom: "0px",
                  paddingTop: "0px",
                }}
                align="center"
              >
                <div className="headerCell">
                  <p>Topics</p>
                  <TableMenu />
                </div>
              </StyledTableCell>
              <StyledTableCell
                style={{
                  paddingBottom: "0px",
                  paddingTop: "0px",
                }}
                align="center"
              >
                <div class="headerCell">
                  <p>ILOs</p>
                  <TableMenu />
                </div>
              </StyledTableCell>
              <StyledTableCell
                style={{
                  paddingBottom: "0px",
                  paddingTop: "0px",
                }}
                align="center"
              >
                <div class="headerCell">
                  <p>TLAs</p>
                  <TableMenu />
                </div>
              </StyledTableCell>
              <StyledTableCell
                style={{
                  paddingBottom: "0px",
                  paddingTop: "0px",
                }}
                align="center"
              >
                <div class="headerCell">
                  <p>ATs</p>
                  <TableMenu />
                </div>
              </StyledTableCell>
              <StyledTableCell
                style={{
                  paddingBottom: "0px",
                  paddingTop: "0px",
                }}
                align="center"
              >
                <div class="headerCell">
                  <p>Remarks</p>
                  <TableMenu />
                </div>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <ul>
                    <li>{row.calories}</li>
                  </ul>
                </StyledTableCell>
                <StyledTableCell align="left">{row.fat}</StyledTableCell>
                <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                <StyledTableCell align="left">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
