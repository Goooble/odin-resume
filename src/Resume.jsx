import EducationBlock from "./EducationBlock";
import "./input.css"
function Resume({ data }) {
  return (
    <div className="resume">
      <div className="pi-class">
        <h2>Personal Information: </h2>
        <div className="full-name">
          <h3>Full Name: </h3>
          <p>{data.PI[0]}</p>
        </div>
        <div className="email">
          <h3>Email: </h3>
          <p>{data.PI[1]}</p>
        </div>
        <div className="phone">
          <h3>Phone Number: </h3>
          <p>{data.PI[2]}</p>
        </div>
        <div className="address">
          <h3>Address: </h3>
          <p>{data.PI[3]}</p>
        </div>
      </div>
      <hr />
      <div className="education-class">
        <h2>Education</h2>
        <EducationBlock data={data}></EducationBlock>
      </div>
    </div>
  );
}

export default Resume;
