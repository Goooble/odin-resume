import InputField from "./InputField";
import { useState } from "react";

function DegreeEdit({ data, setData, id, setOpen }) {
  const [degreeData, setDegreeData] = useState(
    {
      0: data.degree[id][0],
      1: data.degree[id][1],
      2: data.degree[id][2],
      3: data.degree[id][3],
      4: data.degree[id][4],
    },
  );
  return (
    <div className="degree-edit-cont">
      <InputField
        type="text"
        label="School Name"
        placeholder="Enter school name"
        data={degreeData}
        setData={setDegreeData}
        PIID="0"
      ></InputField>
      <InputField
        type="text"
        label="Degree"
        placeholder="Enter your degree"
        data={degreeData}
        setData={setDegreeData}
        PIID="1"
      ></InputField>
      <InputField
        type="date"
        label="Start Date"
        // placeholder=""
        data={degreeData}
        setData={setDegreeData}
        PIID="2"
      ></InputField>
      <InputField
        type="date"
        label="End Date"
        // placeholder="City, Country"
        data={degreeData}
        setData={setDegreeData}
        PIID="3"
      ></InputField>
      <InputField
        type="text"
        label="Location"
        placeholder="Enter school location"
        data={degreeData}
        setData={setDegreeData}
        PIID="4"
      ></InputField>
      <button onClick={()=>setOpen(-1)}>Close</button>
      <button
        onClick={() =>
        {
          const object = { ...data, degree: [ ...data.degree] }
          object.degree[id]= degreeData;
          setData(object)
        }
          
        }
      >
        Submit
      </button>
    </div>
  );
}

export default DegreeEdit;
