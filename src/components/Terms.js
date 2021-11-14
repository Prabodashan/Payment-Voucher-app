import React from "react";
import { Link } from "react-router-dom";

export const Terms = () => {
  return (
    <div style={{ display: "block", padding: "25px" }}>
      <h4>
        This is an open source website(GitHub ).
        <br /> As the developer, we do not accept any responsibility for the
        content you include in the PDF you obtain using this application and for
        any use of it. <br /> As a user you are responsible for how this is used
        and what is done using it.
      </h4>
      <br />
      <Link to="/">Go back</Link>
    </div>
  );
};
