import { connect } from "react-redux";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NewPoll from "./components/NewPoll";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { useEffect } from "react";
import LeaderDashboard from "./components/LeaderDashboard";
import { handleInitialData } from "../src/actions/index";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";

import QuestionPreview from "./components/QuestionPreview";
import Questions from "./components/Questions";
import Logout from "./components/Logout";
import ProtedtedRoutes from "./protectedRoute/ProtedtedRoutes";
import BadRequest from "./components/BadRequest";
// import { logoutAuthedUser } from "./actions/authedUser";

function App({ dispatch, authedUser, users }) {
  useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  // console.log(authedUser);

  return (
    <div className="App">
      <Nav />
      <LoadingBar />

      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        {typeof authedUser !== "object" && (
          <>
            <Route exact path="/logout" element={<Logout />} />
            <Route element={<ProtedtedRoutes />}>
              <Route exact path="/add" element={<NewPoll />} />
              <Route exact path="leaderboard" element={<LeaderDashboard />} />
              <Route exact path="/" element={<Questions />} />
              <Route exact path="questions/:id" element={<QuestionPreview />} />
            </Route>
          </>
        )}
        <Route exact path="*" element={<BadRequest />} />
      </Routes>

      <Footer />
    </div>
  );
}

const mapStateToProps = ({ users, questions, LoadingBar, authedUser }) => {
  let loading = LoadingBar;
  return { users, questions, loading, authedUser };
};

export default connect(mapStateToProps)(App);
