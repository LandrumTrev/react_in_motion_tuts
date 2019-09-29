import React from "react";

// note props manually passed in as the args object
const StatelessFC = props => (
  // note the use of () instead of {} in the arrow function block
  // (...) same as { return (...) }, but simplified
  <button onClick={props.decrementClick}>
    {/* also note just "props" instead of "this.props" */}
    Oh no! Me unlearn!
  </button>
);

export default StatelessFC;
