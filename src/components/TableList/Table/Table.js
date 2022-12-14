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
import { useState } from 'react';


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

// ----------- examples -------------------------------------------------
const topics = ["topic 1", "topic 2", "topic 3", "topic 4", "topic 5"];
const ILOs = ["ILO 3", "ILO 4", "ILO 5"];
const TLAs = ["TLA 1", "TLA 2", "TLA 4", "TLA 5"];
const ATs = ["AT 1", "AT 2", "AT 3", "AT 4", "AT 5"];
const Remarks = ["Remarks 1", "Remarks 2", "Remarks 3"];
const rows = [topics, ILOs, TLAs, ATs, Remarks];
// ----------- examples -------------------------------------------------

export default function CustomizedTables() {
  const [topicsArr, setTopicsArr] = useState(topics);
  const [ILOsArr, setILOsArr] = useState(ILOs);
  const [TLAsArr, setTLAsArr] = useState(TLAs);
  const [ATsArr, setATsArr] = useState(ATs);
  const [RemarksArr, setRemarksArr] = useState(Remarks);

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
                  <TableMenu id={"topics"} />
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
                  <TableMenu id={"ilos"} />
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
                  <TableMenu id = {"tlas"} />
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
                  <TableMenu id = "ats" />
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
                  <TableMenu id = "remarks" />
                </div>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: "white", height: "100px" }}>
            <StyledTableCell
              className="container"
              style={{ paddingLeft: "25px" }}
            >
              <ul>
                {topicsArr.map((topic) => {
                  return <li>{topic}</li>;
                })}
              </ul>
            </StyledTableCell>
            <StyledTableCell
              className="container"
              style={{ paddingLeft: "25px" }}
            >
              <ul>
                {ILOsArr.map((ILO) => {
                  return <li>{ILO}</li>;
                })}
              </ul>
            </StyledTableCell>
            <StyledTableCell
              className="container"
              style={{ paddingLeft: "25px" }}
            >
              <ul>
                {TLAsArr.map((TLA) => {
                  return <li>{TLA}</li>;
                })}
              </ul>
            </StyledTableCell>
            <StyledTableCell
              className="container"
              style={{ paddingLeft: "25px" }}
            >
              <ul>
                {ATsArr.map((AT) => {
                  return <li>{AT}</li>;
                })}
              </ul>
            </StyledTableCell>
            <StyledTableCell
              className="container"
              style={{ paddingLeft: "25px" }}
            >
              <ul>
                {RemarksArr.map((Remark) => {
                  return <li>{Remark}</li>;
                })}
              </ul>
            </StyledTableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

//  ! way to find max number lenght of an array inside an object
// const obj = [
//   { employees: ["e1", "e2", "e3", "f4"] },
//   { employees: ["e4", "e5", "e6"] },
//   { employees: ["e7", "e8", "e9"] },
//   { employees: ["e10", "e11", "e12"] },
//   { employees: ["e13", "e14", "e15"] },
// ];
// const arr = Object.values(obj)
//   .map((obj) => Object.values(obj))
//   .map((a) => a[0].length);
// console.log(arr);
// const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
// console.log(max);

// <TableBody>
//             {rows.map((row) => (
//               <StyledTableRow >
//                 <StyledTableCell align="left">{row.topics}</StyledTableCell>
//                 <StyledTableCell align="left">
//                   <ul>
//                     <li>{row.ILOs}</li>
//                   </ul>
//                 </StyledTableCell>
//                 <StyledTableCell align="left">{row.TLAs}</StyledTableCell>
//                 <StyledTableCell align="left">{row.ATs}</StyledTableCell>
//                 <StyledTableCell align="left">{row.Remarks}</StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>

// const rows = [
//   createData(
//     "Explain the key concepts of the Software Design process and demonstrate how the essential design principles are applied within it",
//     "Explain the key concepts of the Software Design process and demonstrate how the essential design principles are applied within it",
//     "Explain the key concepts of the Software Design process and demonstrate how the essential design principles are applied within it",
//     "Explain the key concepts of the Software Design process and demonstrate how the essential design principles are applied within it",
//     "Explain the key concepts of the Software Design process and demonstrate how the essential design principles are applied within it"
//   ),
//   createData("Ice cream sandwich", 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// function createData(topics, ILOs, TLAs, ATs, Remarks) {
//   return { topics, ILOs, TLAs, ATs, Remarks };
// }