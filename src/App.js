import { connect } from 'react-redux';
import './App.css';
import LoginPage from './components/LoginPage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import NewPoll from './components/NewPoll';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'
import { useEffect } from 'react';
import LeaderDashboard from './components/LeaderDashboard';
import { handleInitialData } from '../src/actions/index';
import { Routes, Route} from 'react-router-dom';
import LoadingBar from "react-redux-loading-bar";

import QuestionPreview from './components/QuestionPreview';
import Questions from './components/Questions';




function App({ dispatch, users, questions, loading}) {


  useEffect(() => {
    M.AutoInit();
  },[]);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  // console.log(users)
 
  return (
    <div className="App">
      <Nav />
      <LoadingBar />
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/add' element={<NewPoll />} />
        <Route exact path='/leaderdashboard' element={<LeaderDashboard />} />
        <Route exact path='/questions' element={<Questions/>} />
        <Route exact path='/question/:id' element={<QuestionPreview/>} />
      </Routes>
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
