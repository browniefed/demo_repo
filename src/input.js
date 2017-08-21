import React from "react";

const Input = ({ type, name, placeholder, value, onChange }) => {
  return (
    <div>
      <input
        type={type || "text"}
        className="input"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={e => {
          onChange(name, e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
