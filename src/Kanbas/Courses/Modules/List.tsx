import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule, setModules} from "./reducer";
import { KanbasState } from "../../store";
import "./index.css";
import * as client from "./client";

import {
  FaCheck,
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaRegCheckCircle
} from "react-icons/fa";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId).then((modules) => 
    dispatch(setModules(modules)));
  }, [courseId]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const moduleList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
  state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="flex-fill">
      <div className="row">
        <div className="col">
          <span id="module-buttons" className="float-end">
            <button className="btn btn-light border">Collapse All</button>
            <button className="btn btn-light border">Expand All</button>
            <button className="btn btn-light border">View Progress</button>
            <div className="btn btn-light border">
              <FaRegCheckCircle className="text-success me-1" />
              <select className="btn-light border-0">
                <option>Publish All</option>
                <option>Unpublish All</option>
                <option>Unpublish All</option>
              </select>
            </div>
            <button className="btn btn-danger">+ Module</button>
            <button className="btn btn-light border">
              <FaEllipsisV />
            </button>
          </span>
        </div>
      </div>
      <hr />

      <h4>Add Module</h4>
      <div className="row">
        <div className="col">
          <input value={module.name} onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />
          <button className="btn btn-success ms-2 rounded" onClick={handleAddModule}>
            Add
          </button>
          <button className="btn btn-primary ms-2" onClick={handleUpdateModule}>
            Update
          </button>
        </div>
      </div>
      <div className="mt-2">
        <textarea className="w-25" value={module.description} onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} />
      </div>
      <hr />
      <ul className="list-group wd-modules">
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item" /*onClick={() => setSelectedModule(module)}*/>
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <button className="btn btn-primary ms-2 px-1 rounded" onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>

                  <button className="btn btn-danger rounded ms-2 px-1" onClick={() => handleDeleteModule(module._id)}>
                    Delete
                  </button>

                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {
                <ul className="list-group">
                  {module.lessons?.map((lesson: any, index: number) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              }
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;