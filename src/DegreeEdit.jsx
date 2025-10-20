import InputField from "./InputField";
import { useState } from "react";

function DegreeEdit({data, setData, id}){
    const [degreeData, setDegreeData] = useState([{0: "", 1:"", 2:"", 3:"", 4:""}])

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
      <button onClick={() => setData({ ...data, degree: {...data.degree, [id]: degreeData}})}>Submit</button>
      </div>
    )
}

export default DegreeEdit