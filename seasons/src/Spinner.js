import React from "react";
import "./SeasonDisplay.css";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer text-center">
      <div className="ui text loader text-center">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading ...",
};

export default Spinner;
