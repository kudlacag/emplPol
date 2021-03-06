import React from "react";
import { connect } from "react-redux";
import { logoutAuthedUser } from "../actions/authedUser";
import { Link, useNavigate } from "react-router-dom";

function Logout({ dispatch }) {
  const navigate = useNavigate();
  const logout = () => {
    dispatch(logoutAuthedUser());
    navigate("/login");
  };
  return (
    <div>
      <h4>You are loged out</h4>
      <p>
        if you want to log in again{" "}
        <Link to="/login" data-testid="login-link" onClick={logout}>
          Login
        </Link>{" "}
        here
      </p>
    </div>
  );
}

export default connect()(Logout);
