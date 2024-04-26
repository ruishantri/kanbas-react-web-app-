import React, { useEffect, useState } from "react";
import * as client from "./cilent";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, setAssignment } from "./assignmentsReducer"
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert"
import { KanbasState } from "../../store";


function Assignments() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const linkStyle = { "text-decoration": "none", 
    color: "black", "font-weight": "bold", "background-color": "white" };
  
    useEffect(() => {
      client.findAssignmentsForCourse(courseId).then((assignments) => dispatch(setAssignment(assignments)));
    }, [courseId]);
  
    const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
  
    const handleDeleteAssignment = (assignmentId: string) => {
      client.deleteAssignment(assignmentId).then((status) => {
        dispatch(deleteAssignment(assignmentId));
      });
    };
  
    const confirmDelete = (assignment: any) => {
      confirmAlert({
        title: "Delete Assignment",
        message: `Are you sure you want to delete ${assignment.name}?`,
        buttons: [
          {
            label: "Yes",
            onClick: () => handleDeleteAssignment(assignment._id),
          },
          {
            label: "No",
          },
        ],
      });
    };
  
    const newAssignment = () => {
      const assignmentDefaults = {
        name: "New Assignment",
        description: "New Assignment Description",
        points: "100",
        course: courseId,
      };
      dispatch(setAssignment(assignmentDefaults));
      navigate(`/Kanbas/Courses/${courseId}/Assignments/*`);
    };
  
    const editAssignment = (assignment: any) => {
      dispatch(setAssignment(assignment));
      navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`);
    };
  
    return (
      <div className="flex-fill">
        <div className="row">
          <div className="col">
            <input className="form-control w-50" type="text" placeholder="Search for Assignments" />
          </div>
          <div className="col">
            <span className="float-end">
              <button className="btn btn-light border me-2">+ Group</button>
              <button className="btn btn-danger me-2" onClick={() => newAssignment()}>
                + Assignment
              </button>
              <button className="btn btn-light border">
                <FaEllipsisV />
              </button>
            </span>
          </div>
        </div>
        <hr />
        <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div>
              <FaEllipsisV className="me-2" /> ASSIGNMENTS
              <span className="float-end">
                40% of Total
                <FaCheckCircle className="text-success ms-2" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            <ul className="list-group">
              {assignmentList
                .filter((assignment) => assignment.course === courseId)
                .map((assignment, index) => (
                  <li key={index} className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    <button
                      style={linkStyle}
                      onClick={() => {
                        editAssignment(assignment);
                      }}
                    >
                      <span className="float-start">{assignment.name} </span>
                      <br />
                      <span className="float-start">
                        Points: {assignment.points} | Due: {assignment.dueDate}
                      </span>
                    </button>
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <button className="btn btn-danger px-1 rounded ms-1" onClick={() => confirmDelete(assignment)}>
                        Delete
                      </button>
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
  export default Assignments;