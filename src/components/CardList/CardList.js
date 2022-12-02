import React from "react";
import Card from "../../Card";
import "tachyons";
import {useState} from 'react';

const CardList = ({ robots, deleteMode }) => {

	const [clcikedCourses, setClickedCourses] = useState([]);

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

	return (
		<div className="dtc">
			{robots.map((user) => {
				return (
					<Card
						key={user.id}
						id={user.id}
						name={user.course}
						email={user.email}
						// onClick={onClick(user.id)}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
