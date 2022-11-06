import React from "react";

const SearchBox = ({ SearchChange, SearchField, OpenModal }) => {
	return (
		<div className="mw9 center ph3-ns">
			<button className="w-10 grow f4 link pv2 dib white bg-light-purple left pointer">
				Create
			</button>
			<input
				className="f4 pa2 w-30 ml5 mr5"
				type="search"
				placeholder="search robots"
				onChange={SearchChange}
			/>
			<button
				className="w-10 grow f4 link pv2 dib white bg-light-red pointer"
				onClick={() => OpenModal(true)}
			>
				Delete
			</button>
		</div>
	);
};

export default SearchBox;
