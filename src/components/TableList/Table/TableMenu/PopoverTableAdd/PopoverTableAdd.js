import * as React from "react";
import Popover from "@mui/material/Popover";
import { useState } from "react";
import TableAdd from "./TableAdd/TableAdd.js";

export default function BasicPopover({ text }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [inputText, setinputText] = useState("");

  return (
    <div>
      <p aria-describedby={id} variant="contained" onClick={handleClick}>
        | {text}
      </p>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <TableAdd onPopOverState={handleClose} defaultval={text} />
      </Popover>
    </div>
  );
}
