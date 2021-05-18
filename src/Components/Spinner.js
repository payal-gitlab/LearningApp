import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="spinner-border" role="status">
        <span className="sr-only">Sending...</span>
      </div>
    </>
  );
}

export default Spinner;