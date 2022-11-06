import React from "react";
import "./Modal.css";

function Modal({ OpenModal, modalKind }) {
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
						<p>....</p>
						<p>Modularity</p>
						<p>....</p>
						<p>Grading Period</p>
						<p>....</p>
						<p>No. Lab hrs</p>
						<p>....</p>
						<p>Start Date</p>
						<p>....</p>
						<p>End Date</p>
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
