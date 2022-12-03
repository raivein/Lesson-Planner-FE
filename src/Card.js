import React from "react";
import "./Card.css";
import cpe_029 from "./CPE_029.png";
import { useState, useEffect } from "react";
import "tachyons";
// path to picture cannot be outsode of src?

const Card = ({ name, email, id, deleteMode, ClickedCourses }) => {
  // const { name, email, id } = props;
  const [clicked, setClicked] = useState(false);
  // const [clcikedCourses, setClickedCourses] = useState([]);

  function onClicked(id) {
    setClicked(!clicked);
    ClickedCourses(id);
  }

  useEffect(() => {
    console.log(clicked, id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked]);

  

  return (
    <div
      {...(deleteMode ? { onClick: () => onClicked(id) } : {})}
      // className="pointer tc bg-light-green dib ma2 shadow-5 dim"
      // {...(clicked && deleteMode ? { style: { border: "5px solid red" } } : {})}
      className={
        clicked && deleteMode
          ? "pointer tc bg-light-green dib ma2 shadow-5 dim ba bw2 b--dark-red"
          : "pointer tc bg-light-green dib ma2 shadow-5 dim"
      }
    >
      {/* css to add for when clicked: b--dark-red br2 dim-on-click */}
      <img
        src={cpe_029} //previoulsy {`https://robohash.org/${id}?200x200`}
        alt={`Courses for ${name}`}
        srcset=""
      />
      <hr />
      <div className="tl innerDiv">
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
