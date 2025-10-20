function EducationBlock({ data, id }) {
  return (
    <div className="degree-cont">
      <div className="school-name">
        <h3>School Name:</h3>
        <p>{data.degree[id][0]}</p>
      </div>
      <div className="degree">
        <h3>Degree:</h3>
        <p>{data.degree[id][1]}</p>
      </div>
      <div className="start-date">
        <h3>Start Date:</h3>
        <p>{data.degree[id][2]}</p>
      </div>
      <div className="end-date">
        <h3>End Date:</h3>
        <p>{data.degree[id][3]}</p>
      </div>
      <div className="location">
        <h3>Location:</h3>
        <p>{data.degree[id][4]}</p>
      </div>
    </div>
  );
}

export default EducationBlock;
