import React from "react";

function Alert(props) {
  const capatil = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show ms-5`}
        role="alert"
        style={{ width: "450px" }}
      >
        <strong>{capatil(props.alert.type)}</strong>:{props.alert.msg}
      </div>
    )
  );
}

export default Alert;
