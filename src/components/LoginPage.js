import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import userPageImage from "../images/login.jpg";
import { setAuthedUser } from "../actions/authedUser";

function LoginPage({ users, userIds, dispatch }) {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };
  const handleChangePassword = (e) => {
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
        // navigate("/");
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

        <div className="input-field col s12">
          <h6>Choose a User</h6>
          <select
            className="browser-default"
            id="input-1"
            data-testid="user-input"
            onChange={handleChangeUser}
          >
            {userIds?.map((user) => (
              <option
                key={users[user].id}
                value={users[user].id}
                style={{ textAlign: "center", fontSize: "25px" }}
              >
                {users[user].id}
              </option>
            ))}
          </select>
        </div>
        <br />

        <div className="input-field col s12" name="password">
          <h6>Choose a Password</h6>
          <select
            className="browser-default"
            id="input-2"
            data-testid="password-input"
            onChange={handleChangePassword}
          >
            {Object.keys(users).map((user) => (
              <option
                key={users[user].id}
                value={users[user].password}
                style={{ textAlign: "center", fontSize: "25px" }}
              >
                Password for {users[user].id} is {users[user].password}
              </option>
            ))}
          </select>
        </div>
        <br />
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
