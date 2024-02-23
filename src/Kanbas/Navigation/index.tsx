import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaHistory, FaNeos, FaRecordVinyl, FaRegArrowAltCircleRight, FaRegQuestionCircle} from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: " ", icon: <FaNeos className="fs-2 account-icon" />  },
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 i" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 account-icon" />  },
    { label: "Courses",   icon: <FaBook className="fs-2 account-icon" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2 account-icon" /> },
    { label: "History",  icon: <FaHistory className="fs-2 account-icon" /> },
    { label: "Studio",  icon: <FaRecordVinyl className="fs-2 account-icon" /> },
    { label: "Commons",  icon: <FaRegArrowAltCircleRight className="fs-2 account-icon" /> },
    { label: "Help",  icon: <FaRegQuestionCircle className="fs-2 account-icon" /> },

  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;