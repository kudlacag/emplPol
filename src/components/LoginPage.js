import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import userPageImage from "../images/login.jpg";
import { setAuthedUser } from "../actions/authedUser";

function LoginPage({ users, dispatch }) {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChanangeUser = (e) => {
    setUser(e.target.value);
  };
  const handleChanangePassword = (e) => {
    setPassword(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (
      !user &&
      !password &&
      !users[user]?.id === user &&
      !users[user]?.password === password
    ) {
      setError(true);
    } else {
      if (users[user]?.id === user && users[user]?.password === password) {
        setSuccess(true);
        dispatch(setAuthedUser(user));
        navigate("/");
      } else {
        setError(true);
      }
    }
  };

  const input1 = document.getElementById("input-1");
  const input2 = document.getElementById("input-2");
  if (error) {
    input1.style.border = "3px solid red";
    input2.style.border = "3px solid red";
  }

  return (
    <div>
      {success && (
        <h5
          data-testid="success-header"
          style={{ backgroundColor: "green", color: "white" }}
        >
          logged in
        </h5>
      )}
      <form onSubmit={formSubmit}>
        <h1>Employee Poll</h1>
        <img src={userPageImage} width="350px" height="auto" alt="userpage" />
        <h3>Log In</h3>

        <label htmlFor="user">User</label>
        <br />
        <input
          type="text"
          name="user"
          value={user}
          onChange={handleChanangeUser}
          className="input-field center"
          data-testid="user-input"
          id="input-1"
        />
        <br />

        <label htmlFor="password">Password</label>
        <br />

        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChanangePassword}
          className="input-field center"
          data-testid="password-input"
          id="input-2"
        />
        <br />
        <p>{error}</p>
        <br />
        <button
          className="btn waves-effect waves-light"
          type="submit"
          value="Submit"
          disabled={!user}
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  const users = state.users;
  const authedUser = state.authedUser;
  const userIds = Object.keys(users).map((user) => {
    return user;
  });
  const userPassword = userIds.map((password) => {
    return users[password].password;
  });
  return {
    users,
    userIds,
    authedUser,
    userPassword,
  };
};

export default connect(mapStateToProps)(LoginPage);
