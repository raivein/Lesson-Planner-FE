import React from "react";
import "./Card.css";
import cpe_029 from "./CPE_029.png";
import { useState } from "react";
import "tachyons";
// path to picture cannot be outsode of src?

const Card = ({ name, email, id, deleteMode }) => {
  // const { name, email, id } = props;
  const [clicked, setClicked] = useState(false);
  const [clcikedCourses, setClickedCourses] = useState([]);

  const onClicked = (id) => {
    if (deleteMode) {
      setClicked(!clicked);
      if (clcikedCourses.includes(id)) {
        setClickedCourses(clcikedCourses.filter((course) => course !== id));
      } else {
        setClickedCourses([...clcikedCourses, id]);
      }
    }
    console.log(clcikedCourses);
  };

  return (
    <div
      {...(deleteMode ? { onClick: () => onClicked(id) } : {})}
      className="pointer tc bg-light-green dib br3 ma2 bw2 shadow-5 dim"
      {...(clicked && deleteMode ? { style: { border: "5px solid red" } } : {})}
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
