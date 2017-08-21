import React from "react";

const Checkbox = ({ name, value, onChange, label }) => {
  return (
    <div>
      <input
        className="input"
        type="checkbox"
        name={name}
        checked={value}
        onChange={e => {
          onChange(name, e.target.checked);
        }}
      />
      <label className="label">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
