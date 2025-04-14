import React from "react";

const InputFieldRHF = ({
  label,
  type,
  placeholder,
  additionalClassName,
  rhf,
  error,
}) => {
  return (
    <div
      className={`gsap-form-input ${
        additionalClassName ? additionalClassName : ""
      }`}
    >
      <div className={`input-block`}>
        <div className="flex">
          <label>{label}</label>
        </div>
        {type === "textarea" ? (
          <textarea
            placeholder={placeholder}
            {...rhf}
            className={`textarea ${error ? "" : ""} `}
          />
        ) : (
          <input
            type={type ? type : "text"}
            placeholder={placeholder}
            {...rhf}
            className={`input ${error ? "" : ""} `}
          />
        )}
      </div>
      {error && <p className="text-red-600 sm pt-[0.7em]">{error}*</p>}
    </div>
  );
};

export default InputFieldRHF;
