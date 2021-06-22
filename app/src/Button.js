function Button(props) {
  const obj = {
    primary: "btn-primary",
    danger: "btn-danger",
    warning: "btn-warning",
    success: "btn-success",
  };

  console.log(props);

  function renderClassname() {
    let className = "";

    for (let key in obj) {
      if (props[key]) {
        className += obj[key] + " ";
      }
    }

    return className;
  }
  return (
    <button type={props.type} className={`btn ${renderClassname()}`}>
      {props.children}
    </button>
  );
}

export default Button;
