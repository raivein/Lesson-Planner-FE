import React from "react";
import "./Modal.css";
import { useState } from "react";

function Modal({ OpenModal, modalKind }) {

	const gradingSem = ["choose","1st", "2nd"];
	const gradingYear = ["choose","1st", "2nd", "3rd", "4th"];
	const course = ["choose","Math", "Science", "English", "Filipino"];
	const modularity = ["choose","full", "modular"];
	const labhrs = ["choose","1", "2", "3", "4", "5", "6"];
	const lechrs = ["choose","1", "2", "3", "4", "5", "6"];

	const [sem, setSem] = useState("");
	const [year, setYear] = useState("");
	const [courseName, setCourseName] = useState("");
	const [mod, setMod] = useState("");
	const [lab, setLab] = useState("");
	const [lec, setLec] = useState("");

	return (
		<div className="modalBackground">
			{modalKind === "create" ? (
				<div className="modalContainer">
					<div className="titleCloseBtn">
						<h1>Create a Lesson Planner</h1>
						<button onClick={() => OpenModal(false)} className="red grow">
							X
						</button>
					</div>
					{/* <div className="title">
						<h1>Create a Lesson Planner</h1>
					</div> */}
					<br />
					<div className="createForm">
						<p>Course</p>
						<select
							onChange={(e) => setCourseName(e.target.value)}
							dafaultValue={courseName}>
							{course.map((course, idx) => (
								<option key={idx}>{course}</option>
							))}
						</select>
						<p>Modularity</p>
						<select
							onChange={(e) => setMod(e.target.value)}
							dafaultValue={mod}>
							{modularity.map((modularity, idx) => (
								<option key={idx}>{modularity}</option>
							))}
						</select>
						<p>Grading Semester</p>
						<select
							onChange={(e) => setSem(e.target.value)}
							dafaultValue={sem}>
							{gradingSem.map((sem, idx) => (
								<option key={idx}>{sem}</option>
							))}
						</select>
						<p>Grading Year</p>
						<select
							onChange={(e) => setYear(e.target.value)}
							dafaultValue={year}>
							{gradingYear.map((year, idx) => (
								<option key={idx}>{year}</option>
							))}
						</select>
						<p>No. Lab hrs</p>
						<select
							onChange={(e) => setLab(e.target.value)}
							dafaultValue={lab}>
							{labhrs.map((hrs, idx) => (
								<option key={idx}>{hrs}</option>
							))}
						</select>
						<p>No. Lec hrs</p>
						<select
							onChange={(e) => setLec(e.target.value)}
							dafaultValue={lec}>
							{lechrs.map((hrs, idx) => (
								<option key={idx}>{hrs}</option>
							))}
						</select>
						<p>Start Date</p>
						<p>....</p>
					</div>
					<br />
					<div className="footer">
						<button onClick={() => OpenModal(false)} id="cancelBtn">
							Cancel
						</button>
						<button>Create</button>
					</div>
				</div>
			) : (
				<div className="modalContainer">
					<div className="titleCloseBtn">
						<button onClick={() => OpenModal(false)}>X</button>
					</div>
					<div className="title">
						<h1>
							{" "}
							Deleting a course will permanently delete it from the Dashboard
						</h1>
					</div>
					<div className="body">
						<p>Are you sure you want to Delete it?</p>
					</div>
					<div className="footer">
						<button onClick={() => OpenModal(false)} id="cancelBtn">
							Cancel
						</button>
						<button>Continue</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Modal;