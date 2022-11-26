import React from "react";
import Card from "../../Card";

const CardList = ({ robots }) => {

	

	return (
		<div className="tc">
			{robots.map((user) => {
				return (
					<Card
						key={user.id}
						id={user.id}
						name={user.name}
						email={user.email}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
