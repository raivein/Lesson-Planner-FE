import React from "react";

const SearchBox = ({ SearchChange, OpenModal }) => {
	return (
		<div className="mw9 center ph3-ns">
      <button className="w-10 grow f4 link pv2 dib white bg-light-purple left pointer"
      onClick={() => OpenModal(true, "create")}>
				Create
			</button>
			<input
				className="f4 pa2 w-30 ml5 mr5"
				type="search"
				placeholder="search courses"
				onChange={SearchChange}
			/>
			<button
				className="w-10 grow f4 link pv2 dib white bg-light-red pointer"
				onClick={() => OpenModal(true, "delete")}
			>
				Delete
			</button>
		</div>
	);
};

export default SearchBox;
