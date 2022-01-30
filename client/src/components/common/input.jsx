const Input = ({ required, name, label, error, ...rest }) => {
  return (
    <div className="form-group ">
      {required && <span className="text-danger">*</span>}
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control myInput" />
      {error && <span className="text-danger">{error} </span>}
    </div>
  );
};

export default Input;
