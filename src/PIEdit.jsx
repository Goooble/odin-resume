import InputField from "./InputField";
import { useState } from "react";

function PIEdit({ data, setData }) {
  const [PIData, setPIData] = useState({ 0: "hello", 1: "world", 2: "", 3: "" });

  return (
    <div>
      <h2>Personal Information</h2>
      <InputField
        type="text"
        label="Full Name"
        placeholder="Enter name"
        PIData={PIData}
        setPIData={setPIData}
        PIID="0"
      ></InputField>
      <InputField
        type="email"
        label="Email"
        placeholder="Enter email"
        PIData={PIData}
        setPIData={setPIData}
        PIID="1"
      ></InputField>
      <InputField
        type="phone"
        label="Phone Number"
        placeholder="+91"
        PIData={PIData}
        setPIData={setPIData}
        PIID="2"
      ></InputField>
      <InputField
        type="text"
        label="Address"
        placeholder="City, Country"
        PIData={PIData}
        setPIData={setPIData}
        PIID="3"
      ></InputField>
      <button onClick={() => setData({ ...data, PI: PIData })}>Submit</button>
    </div>
  );
}

export default PIEdit;
