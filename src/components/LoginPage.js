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

  const handleChanangeUser = (e) => {
    setUser(e.target.value);
  };
  const handleChanangePassword = (e) => {
    setPassword(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (!user || !password) {
      setError(true);
    } else {
      if (users[user].id === user && users[user].password === password) {
        dispatch(setAuthedUser(user));
        navigate("/");
      } else {
        setError(true);
      }
    }
  };
  return (
    <div>
      {error && (
        <h5
          data-testid="error-header"
          style={{ backgroundColor: "red", padding: "10px" }}
        >
          Error: Please ensure all fields are filled out and everything are
          right.
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
