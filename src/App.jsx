import { useState } from "react";
import PIEdit from "./PIEdit";
import InputField from "./InputField";
import Resume from "./Resume";
import EducationEdit from "./EducationEdit";

// import './App.css'

function App() {
  const [data, setData] = useState({
    PI: { 0: "", 1: "", 2: "", 3: "" },
    degree: {
      0: { 0: "school", 1: "degree", 2: "start", 3: "end", 4: "location" },
    },
  });
  return (
    <>
      <div className="edit-container">
        <PIEdit data={data} setData={setData}></PIEdit>

      </div>
      <Resume data={data}></Resume>
    </>
  );
}

export default App;
