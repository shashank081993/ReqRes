import PropTypes from "prop-types";

function InputField({
  label = "default label",
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
}) {
  return (
    <div className={`input-field ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-box"
      />
    </div>
  );
}
InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
export default InputField;
