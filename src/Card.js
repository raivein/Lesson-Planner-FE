import React from "react";
import "./Card.css";
import cpe_029 from "./CPE_029.png";
import { useState }from "react";
// path to picture cannot be outsode of src?

const Card = ({ name, email, id }) => {
	// const { name, email, id } = props;
	return (
		<div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5 smaller">
			<img
				src={cpe_029} //previoulsy {`https://robohash.org/${id}?200x200`}
				alt="Jane Doe Robot"
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
