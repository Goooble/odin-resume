import { useState } from "react";
import PIEdit from "./PIEdit";
import InputField from "./InputField";
import Resume from "./Resume";
import EducationEdit from "./EducationEdit";

// import './App.css'

function App() {
  const [data, setData] = useState({
    PI: { 0: "", 1: "", 2: "", 3: "" },
    degree: [
      {
        0: "KV",
        1: "B.Tech",
        2: "2025-10-25",
        3: "2029-09-28",
        4: "Mysore",
      },
      {
        0: "KV",
        1: "B.Tech",
        2: "2025-10-25",
        3: "2029-09-28",
        4: "Mysore",
      },
    ],
  });

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
