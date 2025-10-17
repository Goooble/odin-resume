function InputField({ label, type, placeholder, PIData, setPIData, PIID }) {
    
  return (
    <div>
      <label htmlFor={label + "-input-ID"}>{label}</label>
      <input
        onChange={(e) => {
            setPIData({...PIData, [PIID]: e.target.value});
        }}
        type={type}
        id={label + "-input-ID"}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
