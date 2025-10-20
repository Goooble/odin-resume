import { useState } from "react";
import PIEdit from "./PIEdit";
import InputField from "./InputField";
import Resume from "./Resume";
import EducationEdit from "./EducationEdit";

// import './App.css'

function App() {
  const [data, setData] = useState({
    PI: { 0: "", 1: "", 2: "", 3: "" },
    degree: {0:{
    }}
  });

  console.log(data)
  return (
    <>
      <div className="edit-container">
        <PIEdit data={data} setData={setData}></PIEdit>
        
        <EducationEdit data={data} setData={setData}></EducationEdit>
      </div>
      <Resume data={data}></Resume>
    </>
  );
}

export default App;
