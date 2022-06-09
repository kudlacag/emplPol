import React from "react";
import { connect } from "react-redux";
import { logoutAuthedUser } from "../actions/authedUser";
import { Link } from "react-router-dom";
import userAvatar from "../images/useravatar.png";
import { useNavigate } from "react-router-dom";

function Nav(props) {
  const { authedUser, avatar, userName, dispatch } = props;

  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAuthedUser());
    navigate("/login");
  };

  return (
    <nav>
      <div className="nav-wrapper green darken-2">
        <Link to="/" className="brand-logo hide-on-med-and-down">
          Employee Poll
        </Link>
        <ul className="left">
          {typeof authedUser !== "object" && (
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
          {typeof authedUser !== "object" ? (
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
              <li>{userName}</li> <li className="divider"></li>
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
