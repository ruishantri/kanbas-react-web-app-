import "./index.css";
import {
  FaCheckCircle,
  FaBan,
  FaRegFile,
  FaRegArrowAltCircleRight,
  FaRegDotCircle,
  FaChartBar,
  FaBullhorn,
  FaRegBell,
  FaInfoCircle,
  FaRegCalendar,
} from "react-icons/fa";

function Status() {
  return (
    <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: "250px" }}>
      <div className="wd-course-status">
        Course Status <br />
        <div className="row">
          <div className="col pe-0 m-0">
            <button className="btn btn-light border w-100">
              <FaBan />
              <i className="fa fa-ban"></i> Unpublish
            </button>
          </div>
          <div className="col ps-0 m-0">
            <button className="btn btn-success wd-100">
              <FaCheckCircle /> Publish
            </button>
          </div>
        </div>
        <br />
        <div className="wd-course-status">
          <ul>
            <li>
              <a href="#" className="btn btn-light border w-100" role="button">
                <FaRegFile /> Import Existing Content
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-light border w-100" role="button">
                <FaRegArrowAltCircleRight /> Import From Commons
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-light border w-100" role="button">
                <FaRegDotCircle /> Choose From Home Page
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-light border w-100" role="button">
                <FaChartBar /> View Course Stream
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-light border w-100" role="button">
                <FaBullhorn /> New Announcement
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-light border w-100" role="button">
                <FaChartBar /> New Analytics
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-light border w-100" role="button">
                <FaRegBell /> View Course Notifications
              </a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="wd-course-status-upcoming">
            To Do
            <hr />
            <ul>
              <li>
                <a href="#">
                  <FaInfoCircle /> Grade A1 - ENV + HTML Jan 19
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row" style={{ alignItems: "baseline" }}>
          <div className="col">Comming Up</div>
          <div className="col wd-course-status-upcoming">
            <div className="float-end">
              <FaRegCalendar />
              <a href="#"> View Calendar</a>
            </div>
          </div>
        </div>
        <hr />
        <div className="wd-course-status-upcoming">
          <ul>
            <li>
              <FaRegCalendar /> <a href="#">Lecture CS5110 Jan 7</a>
            </li>
            <li>
              <FaRegCalendar />
              <a href="#"> Lecture CS5110 Jan 11</a>
            </li>
            <li>
              <FaRegCalendar />
              <a href="#"> CS5610 Jan 11 at</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Status;