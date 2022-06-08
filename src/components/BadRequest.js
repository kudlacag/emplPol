import React from "react";
import { Link } from "react-router-dom";

function BadRequest() {
  return (
    <div style={{ textAlign: "center", fontSize: "25px", padding: "50px" }}>
      <p>There is nothing to show here: 404</p>
      <Link to={"/login"}>
        <button className="btn waves-effect waves-light" data-testid="Login">
          Login
          <i className="material-icons right">send</i>
        </button>
      </Link>
    </div>
  );
}

export default BadRequest;
