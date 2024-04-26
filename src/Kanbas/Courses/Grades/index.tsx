import { FaArrowLeft, FaCog, FaFilter, FaLongArrowAltLeft, FaLongArrowAltRight, FaRegFile } from "react-icons/fa";
import { assignments, users, grades, enrollments } from "../../Database";

import { useParams } from "react-router-dom";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="flex-fill">
      <div className="row">
        <div className="col">
          <span className="float-end">
            <button className="btn btn-light border me-2">
              <span className="me-2">
                <FaRegFile />
                <FaLongArrowAltRight />
              </span>
              Import
            </button>
            <button className="btn btn-light border me-2">
              <span className="me-2">
                <FaRegFile />
                <FaLongArrowAltLeft />
              </span>
              Export
            </button>
            <button className="btn btn-light border">
              <FaCog />
            </button>
          </span>
        </div>
      </div>

      <div className="row py-3">
        <div className="col">
          <label>
            <h5>Student Names</h5>
          </label>
          <input className="form-control" type="text" name="" id="" placeholder="Search Students" />
        </div>
        <div className="col">
          <label>
            <h5>Assignment Names</h5>
          </label>
          <input className="form-control" type="text" name="" id="" placeholder="Search Assignments" />
        </div>
      </div>
      <button className="btn btn-light border mb-3">
        <FaFilter /> Apply Filters
      </button>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="border">
            <th>Student Name</th>
            {as.map((assignment) => (
              <th>{assignment.course}</th>
            ))}
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = grades.find((grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                    return grade?.grade ? <td>{grade?.grade}</td> : "";
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;