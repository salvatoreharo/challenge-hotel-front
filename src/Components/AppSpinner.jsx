import React from "react";
import { Spinner } from "react-bootstrap";

const AppSpinner = (props) => {
  return (
    <div className="d-flex justify-content-center p-5">
      <Spinner animation="border" role="status" color="#545b62" />
    </div>
  );
};

export default AppSpinner;
