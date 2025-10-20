

function InputField({ label, type, placeholder, data, setData, PIID }) {
  return (
    <div>
      <label htmlFor={label.replace(/\s/g, "") + "-input-"+PIID}>{label}</label>
      <input
        onChange={(e) => {
            setData({...data, [PIID]: e.target.value});
        }}
        type={type}
        id={label.replace(/\s/g, "") + "-input-"+PIID}
        value={data[PIID]}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
//TODO:change PIID
// add id to label