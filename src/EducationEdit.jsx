import DegreeEdit from "./DegreeEdit";
import DisplayHidden from "./DisplayHidden";
import { useState } from "react";
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
    <>
      <h2>Education</h2>
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
    </>
  );
}

export default EducationEdit;
