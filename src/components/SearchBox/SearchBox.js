import React, {useState} from "react";

const SearchBox = ({ SearchChange, OpenModal }) => {

	const [deleteCourse, setDeleteCourse] = useState(false);

	return (
    <div className="mw9 center ph3-ns">
      <button
        className="w-10 grow f4 link pv2 dib white bg-light-purple left pointer"
        onClick={() => OpenModal(true, "create")}
      >
        Create
      </button>
      <input
        className="f4 pa2 w-30 ml5 mr5"
        type="search"
        placeholder="search courses"
        onChange={SearchChange}
      />
      <button
        className="w-10 grow f4 link pv2 dib white bg-light-red pointer mr3"
        onClick={() => setDeleteCourse(!deleteCourse)}
      >
        Delete
      </button>
      <button
        className="w-10 grow f4 link pv2 dib white bg-red pointer"
        onClick={() => OpenModal(true, "delete")}
      >
        confirm
      </button>
    </div>
  );
};

export default SearchBox;
