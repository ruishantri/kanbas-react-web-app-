import { useState, useEffect} from "react";
import axios from "axios";
import { Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Breadcrumb from "./Breadcrumb";
import "./index.css"; 
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";

const API_BASE = process.env.REACT_APP_API_BASE;

function Courses(/*{ courses }: { courses: any[] }*/) {
  console.log(useLocation());

  const { courseId } = useParams();
  const COURSES_API = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState<any>({ id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <>
      <div className="d-flex flex-column">
        <Breadcrumb course={course} />
        <div className="d-flex" style={{ gap: "20px" }}>
          <CourseNavigation />
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default Courses;