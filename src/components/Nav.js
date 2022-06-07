import React from "react";
import { connect } from "react-redux";
import { logoutAuthedUser } from "../actions/authedUser";
import { Link } from "react-router-dom";
import userAvatar from "../images/useravatar.png";

function Nav(props) {
  const { authedUser, avatar, userName, dispatch, users } = props;
  // console.log(authedUser);

  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAuthedUser());
    // console.log("logedout");
  };

  return (
    <nav>
      <div className="nav-wrapper green darken-2">
        <Link to="/" className="brand-logo hide-on-med-and-down">
          Employee Poll
        </Link>
        <ul className="left">
          {authedUser && (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/leaderdashboard">Leaderdashboard</Link>
              </li>
              <li>
                <Link to="/add">New</Link>
              </li>
            </>
          )}
        </ul>
        <ul className="right">
          {authedUser ? (
            <>
              <li>
                <Link to="/">
                  <img
                    src={avatar}
                    alt="useravatar"
                    style={{
                      width: "50px",
                      height: "auto",
                      borderRadius: "50%",
                    }}
                  />
                </Link>
              </li>
              <li>{userName}</li>{" "}
              {/* <li>
                <Link to="/login">Login</Link>
                {" "}
              </li> */}
              <li className="divider"></li>
              <li>
                <Link onClick={logout} to="/logout">
                  Logout
                </Link>
              </li>{" "}
            </>
          ) : (
            <>
              <li>
                <Link to="/">
                  <img
                    src={userAvatar}
                    alt="authedavatar"
                    style={{
                      width: "50px",
                      height: "auto",
                      borderRadius: "50%",
                    }}
                  />
                </Link>
              </li>
              <li>loged out</li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li className="divider"></li>
              {/* <li>
                <Link to="/logout">Logout</Link>
              </li>{" "} */}
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  const authedUser = state.authedUser;
  const users = state.users;
  const userIds = Object.keys(users);
  const avatar = users[authedUser]?.avatarURL;
  const userName = users[authedUser]?.id;

  return {
    authedUser,
    userIds,
    users,
    avatar,
    userName,
  };
};

export default connect(mapStateToProps)(Nav);
