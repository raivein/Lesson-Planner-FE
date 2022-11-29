import React from "react";
import "./Card.css";
import cpe_029 from "./CPE_029.png";
// path to picture cannot be outsode of src?

const Card = ({ name, email, id }) => {
	// const { name, email, id } = props;
	return (
		<div className="pointer tc bg-light-green dib br3 ma2 bw2 shadow-5">
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