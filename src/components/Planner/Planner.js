import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "./Planner.css";
import "tachyons";
import Table from "./Table/Table.js";

export default function FullBorderedGrid({ coursesToOpen, filteredcourses }) {
  console.log(filteredcourses);
  const {
    course,
    date_initial,
    date_start,
    email,
    gradingsem,
    gradingyear,
    labhrs,
    lechrs,
    modularity,
  } = filteredcourses[0];

  return (
    <div>
      <div>
        <h1 className="mb0">TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES</h1>
        <h1 className="mt1">
          <b>LESSON PLANNER</b>
        </h1>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div className="metadata pr0">
          <p>Course</p>
          <p>
            <u>{course}</u>
          </p>
          <p>Grading Sem</p>
          <p>
            <u>{gradingsem}</u>
          </p>
          <p>Grading Year</p>
          <p>
            <u>{gradingyear}</u>
          </p>
          <p>Lab hours</p>
          <p>
            <u>{labhrs}</u>
          </p>
          <p>Lec. hours</p>
          <p>
            <u>{lechrs}</u>
          </p>
          <p>Modularity</p>
          <p>
            {modularity === "modular" ? (
              <u>modular - 6 weeks</u>
            ) : (
              <u>full - 18 weeks</u>
            )}
          </p>
        </div>
      </div>
      <br />
      {/* <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid
          container
          spacing={2}
          sx={{
            "--Grid-borderWidth": "1px",
            borderTop: "var(--Grid-borderWidth) solid",
            borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderBottom: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
            },
          }}
        >
          {[...Array(6)].map((_, index) => (
            <Grid
              key={index}
              {...{ xs: 12, sm: 6, md: 4, lg: 3 }}
              minHeight={160}
            />
          ))}
        </Grid>
      </Box> */}
      <Table />
    </div>
  );
}
