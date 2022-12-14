import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PopoverTableAdd from "./PopoverTableAdd.js";
import { useEffect, useState } from "react";

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onTypeofInput = (type) => {
    setAnchorEl2(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // function onPopOverState() {
  //   handleClose();
  // };

  useEffect(() => {
    console.log("anchorEl", anchorEl);
  }, [anchorEl]);

  useEffect(() => {
    console.log("anchorEl", anchorEl2);
  }, [anchorEl2]);

  return (
    <div style={{ height: "auto", width: "auto" }}>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="pa0"
      >
        <h1 style={{ margin: "0", padding: "0" }}>+</h1>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={(ev) => {
            onTypeofInput("text");
          }}
          onClose={handleClose}
        >
          <TextFieldsIcon color="secondary" />{" "}
          <PopoverTableAdd text={"text"} />
        </MenuItem>
        <MenuItem
          onClick={(ev) => {
            onTypeofInput("list");
          }}
          onClose={handleClose}
        >
          <FormatListBulletedIcon color="primary" />{" "}
          <PopoverTableAdd text={"list"} />
        </MenuItem>
      </Menu>
    </div>
  );
}
