import React, { useState } from "react";
import "./Input.css";

const Input = ({ title, isPassword }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="input border-b border-red">
      <input
        type={isPassword ? "password" : "text"}
        placeholder={title}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
