import React from "react";
// import { Link } from "react-router-dom";
import notFoundImage from "../images/404.jpg";

function BadRequest() {
  return (
    <div style={{ textAlign: "center", fontSize: "25px", padding: "50px" }}>
      <p data-testid="Text">
        There is nothing to show here or the page is loading
      </p>
      <img
        data-testid="Image"
        src={notFoundImage}
        width="550px"
        height="auto"
        alt="userpage"
      />
    </div>
  );
}

export default BadRequest;
