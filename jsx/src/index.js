// Import the react and reactDOM ribraries
import React from "react";
import ReactDOM from "react-dom";

//create a react component
//react component is a function or a class that produces HTML that we are going to show to the user using JSX
//also handles feedback from the user using event handlers
const App = () => {
  const buttonText = { text: "Click Me!" };
  const labelText = "Enter Name :";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={PopStateEvent}
      >
        {buttonText.text}
      </button>
    </div>
  );
};

//Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
