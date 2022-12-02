import Card from "../../Card";
import "tachyons";
import React, { useState, useEffect } from "react";
// import { useState } from "react";

const CardList = ({ robots, deleteMode }) => {
  // const [clcikedCourses, setClickedCourses] = useState([]);

  // const onClick = (id) => {
  // 	if (deleteMode) {
  // 		if (clcikedCourses.includes(id)) {
  // 			setClickedCourses(clcikedCourses.filter((course) => course !== id));
  // 		} else {
  // 			setClickedCourses([...clcikedCourses, id]);
  // 		}
  // 	}
  // 	console.log(clcikedCourses);
  // };

  const [clickedCourses, setClickedCourses] = useState([]);

  function onClickedCourses(id) {
    if (id.length !== 0) {
      id = parseInt(id);
      if (deleteMode) {
        if (clickedCourses.includes(id)) {
          setClickedCourses(clickedCourses.filter((course) => course !== id));
        } else {
          setClickedCourses([...clickedCourses, id]);
        }
      }
    }
  }

  useEffect(() => {
    console.log(clickedCourses);
  }, [clickedCourses]);

  return (
    <div className="dtc">
      {robots.map((user) => {
        return (
          <Card
            deleteMode={deleteMode}
            key={user.id}
            id={user.id}
            name={user.course}
            email={user.email}
            ClickedCourses={onClickedCourses}
            // onClick={onClick(user.id)}
          />
        );
      })}
    </div>
  );
};

export default CardList;
