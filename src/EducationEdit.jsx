import DegreeEdit from "./DegreeEdit";
import DisplayHidden from "./DisplayHidden";
import { useState } from "react";
import './editBlock.css'
function EducationEdit({ data, setData }) {
  const [open, setOpen] = useState(-1);
  const degree = [];
//   console.log(open);
  for (const key in data.degree) {
    if(open==key){
        degree.push(
          <DegreeEdit
            key={key}
            data={data}
            setData={setData}
            id={key}
            setOpen={setOpen}
          ></DegreeEdit>
        )
    }else{
        
        degree.push(
          <DisplayHidden
            setOpen={setOpen}
            data={data}
            id={key}
            key={key}
          ></DisplayHidden>
        );
    }
  }
  return (
    <div className="education-cont">
      <h2>Education</h2>
      <div className="education-field-cont">
      {degree}
      <button
        onClick={() => {
          setOpen(data.degree.length);
          setData({
            ...data,
            degree: [
              ...data.degree,
              { 0: "New Education", 1: "", 2: "", 3: "", 4: "" },
            ],
          });
        }}
      >
        Add Education
      </button>
      </div>
    </div>
  );
}

export default EducationEdit;
