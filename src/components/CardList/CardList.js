import React from "react";
import Card from "../../Card";

const CardList = ({ robots }) => {
	// return an array of Card components with the props of name, email, and id using the map function. The key prop is used by React to keep track of the list items and is required when using the map function. This way React can keep track of the list items and only update the ones that have changed and not the whole Dom.

	// return the array of Card components which are stored in the cardComponent variable

	// if () {
	// 	throw new Error("Nooooo");
	// }
	//! enable code above to see how ErrorBoundaries work. Check console also

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
