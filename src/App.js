import { connect } from 'react-redux';
import './App.css';
import LoginPage from './components/LoginPage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import NewPoll from './components/NewPoll';
import UserPage from './components/UserPage';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'
import { useEffect } from 'react';
import NewQuestions from './components/NewQuestions';
import LeaderDashboard from './components/LeaderDashboard';
import Questions from './components/Questions';
import { handleInitialData } from '../src/actions/index';
import DoneQuestions from './components/DoneQuestions';
import { Routes, Route} from 'react-router-dom';
import LoadingBar from "react-redux-loading-bar";




function App({ dispatch, users, questions, loading}) {

  useEffect(() => {
    M.AutoInit();
  },[]);

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);



  return (
    <div className="App">
      <Nav />
      <LoadingBar />
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/new' element={<NewPoll />} />
        <Route exact path='/leaderdashboard' element={<LeaderDashboard />} />
      </Routes>
      {/* <NewPoll /> */}
     {/* <DoneQuestions /> */}
      {/* <LeaderDashboard /> */}
      {/* <Questions /> */}
      {/* <UserPage /> */}
      {/* <NewPoll /> */}
      {/* <LoginPage /> */}
      <Footer />
    </div>
  );
}

const mapStateToProps = ({ users, questions, LoadingBar}) => {
   let loading = !LoadingBar;
   return { users,
  questions,
  loading,
  

}
}

export default connect(mapStateToProps)(App);
