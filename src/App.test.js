import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// it() is Jest's test function, which takes 2 args:
// 1st arg: name of the test to display,
// 2nd arg: arrow function of the test to run.
it("renders without crashing", () => {
  // create variable for a <div> named "div"
  const div = document.createElement("div");
  // use ReactDOM to render the App component into a new <div>
  ReactDOM.render(<App />, div);
  // and then complete the lifecycle by unmounting the test <div>
  ReactDOM.unmountComponentAtNode(div);
});
