import React from "react";

const Input = ({ className, type, placeholder, value, onChange, name }) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e, name)}
      name={name}
    />
  );
};

export default Input;
