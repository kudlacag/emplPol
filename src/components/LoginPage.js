import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import userPageImage from "../images/login.jpg";
import { setAuthedUser } from "../actions/authedUser";

function LoginPage({ users, dispatch }) {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleChanangeUser = (e) => {
    setUser(e.target.value);
  };
  const handleChanangePassword = (e) => {
    setPassword(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (users[user].id === user && users[user].password === password) {
      dispatch(setAuthedUser(user));
      // console.log(users[user].id === user && users[user].password === password);
      navigate("/");
    } else {
      console.log("password or user false");
    }
  };
  return (
    <div>
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
          className="input-field"
          data-testid="user-input"
        />
        <br />

        <label htmlFor="password">Password</label>
        <br />

        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChanangePassword}
          className="input-field"
          data-testid="password-input"
        />
        <br />

        <button
          className="btn waves-effect waves-light"
          type="submit"
          value="Submit"
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
