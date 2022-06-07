import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
// import authedUser from "../reducers/authedUser";

const ProtedtedRoutes = ({ authedUser, users, children }) => {
  if (!authedUser) {
    return <Navigate to="/login" replace />;
  }
  return children ? children : <Outlet />;
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(ProtedtedRoutes);
