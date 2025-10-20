import DegreeDisplay from "./DegreeDisplay";

function EducationBlock({ data }) {
  const degrees = [];
  for (const key in data.degree) {
    degrees.push(<DegreeDisplay key={key} data={data} id={key}></DegreeDisplay>);
  }
  return <>{degrees}</>;
}

export default EducationBlock;
