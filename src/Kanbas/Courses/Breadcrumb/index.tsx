import { FaBars } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";

function Breadcrumb({ course }: { course: any }) {
  const { courseId, assignmentId } = useParams();
  console.log(course, assignmentId);
  const { pathname } = useLocation();

  return (
    <div className="d-none d-md-block flex-fill">
      <nav aria-label="breadcrumb breadcrumb-divider: quote('>');">
        <ol className="breadcrumb mt-3">
          <li className="breadcrumb-item">
            <FaBars className="me-2" />
            {course?.number + " " + course?.name}
          </li>
          <li className={`breadcrumb-item ${assignmentId === undefined ? " active" : ""}`} aria-current="page">
            {pathname.includes("Home") ? "Home" : ""}
            {pathname.includes("Modules") ? "Modules" : ""}
            {pathname.includes("Assignments") ? "Assignments" : ""}
            {pathname.includes("Grades") ? "Grades" : ""}
          </li>
          {assignmentId !== undefined ? (
            <li className="breadcrumb-item active" aria-current="page">
              {assignmentId}
            </li>
          ) : (
            ""
          )}
        </ol>
      </nav>
      <hr />
    </div>
  );
}
export default Breadcrumb;