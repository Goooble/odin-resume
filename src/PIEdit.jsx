import InputField from "./InputField";
import { useState } from "react";
import './editBlock.css'
function PIEdit({ data, setData }) {
  const [PIData, setPIData] = useState({ 0: "hello", 1: "world", 2: "", 3: "" });

  return (
    <div className="PI-cont">
      <h2>Personal Information</h2>
      <div className="pi-field-cont">
      <InputField
        type="text"
        label="Full Name"
        placeholder="Enter name"
        data={PIData}
        setData={setPIData}
        PIID="0"
      ></InputField>
      <InputField
        type="email"
        label="Email"
        placeholder="Enter email"
        data={PIData}
        setData={setPIData}
        PIID="1"
      ></InputField>
      <InputField
        type="phone"
        label="Phone Number"
        placeholder="+91"
        data={PIData}
        setData={setPIData}
        PIID="2"
      ></InputField>
      <InputField
        type="text"
        label="Address"
        placeholder="City, Country"
        data={PIData}
        setData={setPIData}
        PIID="3"
      ></InputField>
      </div>
      <button onClick={() => setData({ ...data, PI: PIData })}>Submit</button>
    </div>
  );
}

export default PIEdit;
