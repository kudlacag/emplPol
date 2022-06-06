import React from "react";
import { Link } from "react-router-dom";

function Logout() {
  return (
    <div>
      <h4>you are loged out</h4>
      <p>
        if you want to log in again <Link to="/login">Login</Link> here
      </p>
    </div>
  );
}

export default Logout;
