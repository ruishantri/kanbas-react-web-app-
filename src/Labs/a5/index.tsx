import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

const API_BASE = process.env.REACT_APP_API_BASE;

function Assignment5() {
  const welcomeURL = `${API_BASE}/a5/welcome`;
  return (
    <div className="container">
      <h1>Assignment 5</h1>
      <a href={welcomeURL}>Welcome</a>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;
