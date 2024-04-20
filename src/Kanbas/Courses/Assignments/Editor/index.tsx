import React from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment, setAssignment } from "../assignmentsReducer";
import { KanbasState } from "../../../store";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const { pathname } = useLocation();
  const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  //const assignment = assignments.find((assignment) => assignment._id === assignmentId);
  const navigate = useNavigate();

  const handleSave = () => {
    // Add assignment if new, update if exists
    if (pathname.includes("*")) {
      dispatch(addAssignment({ ...assignment, course: courseId }));
    } else {
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="flex-fill">
      <div className="row">
        <div className="col">
          <span className="wd-published float-end">
            <FaCheckCircle className="text-success me-2" />
            Published
            <button className="btn btn-light border ms-2">
              <FaEllipsisV />
            </button>
          </span>
        </div>
      </div>
      <hr />
      <h4>Assignment Name</h4>
      <input value={assignment?.name} onChange={(e) => dispatch(setAssignment({ ...assignment, name: e.target.value }))} className="form-control mb-4" />
      <textarea
        className="form-control mb-4"
        rows={4}
        value={assignment.description}
        onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))}
      />
      <div className="row mb-4">
        <div className="col-3">
          <label className="float-end" htmlFor="points-field">
            Points
          </label>
        </div>
        <div className="col-6">
          <input
            id="points-field"
            className="float-end form-control"
            type="text"
            value={assignment.points}
            onChange={(e) => dispatch(setAssignment({ ...assignment, points: e.target.value }))}
          />
        </div>
      </div>
      <div className="row mb-4 p-4">
        <div className="col-3">
          <label className="float-end me-2">Assign</label>
        </div>
        <div className="col-6">
          <div className="row border p-3">
            <label className="pt-2" htmlFor="wd-due-date">
              Due
            </label>
            <br />
            <input
              className="form-control"
              type="date"
              value={assignment.dueDate}
              name="wd-due-date"
              id="wd-due-date"
              onChange={(e) => dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))}
            />
            <div className="col ps-0 pe-1 pt-2">
              <label htmlFor="wd-available-date">Available from</label>
              <br />
              <input
                className="form-control"
                type="date"
                value={assignment.availableFromDate}
                name="wd-available-date"
                id="wd-available-date"
                onChange={(e) => dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))}
              />
            </div>
            <div className="col pe-0 ps-1 pt-2">
              <label htmlFor="wd-until-date">Until</label>
              <br />
              <input
                className="form-control"
                type="date"
                value={assignment.availableUntilDate}
                name="wd-until-date"
                id="wd-until-date"
                onChange={(e) => dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))}
              />
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleSave} className="btn btn-danger ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light border float-end">
        Cancel
      </Link>
    </div>
  );
}
export default AssignmentEditor;