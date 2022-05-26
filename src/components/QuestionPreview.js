import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
// import userOne from '../images/user1.jpg';
import { handleAddanswer } from "../actions/saveAnswer";

function QuestionPreview({ dispatch }) {
  const { state } = useLocation();

  const { questions, users, questionIds, userIds, authedUser } = state;
  let { id } = useParams();

  const newId = questionIds.filter((qId) => {
    return qId === id;
  });
  const [answer, setAnswer] = useState();

   const options = (e) => {
  
    setAnswer(e.target.value)
  }


 

  const photo = userIds.filter((user) => {
    return users[user];
  });

  const newPhoto = photo.filter((fot) => {
    return questions[newId].author === fot;
  });



  const answered = Object.keys(users[authedUser].answers).includes(id);

  if(authedUser && id && answer){
 dispatch(handleAddanswer(authedUser, id, answer));
}


  return (


    <div key={questions[newId].id}>
      <h3>Poll by {questions[newId].author}</h3>

      <img
        src={users[newPhoto].avatarURL}
        alt="username"
        style={{ borderRadius: "50%", width: "350px", height: "auto" }}
      />

      <h3>Would You Rather</h3>
      <div className="row ">
        <div className="col s6">
          <h5>{questions[newId].optionOne.text}</h5>
          
          <button
            style={{ backgroundColor: answered && "grey" }}
            type="button"
            className="block"
            onClick={options}
            disabled={answered}
            value='optionOne'
            
          >
          {answered ? "Answered" : "Select"}
          </button>
        </div>
        <div className="col s6">
          <h5>{questions[newId].optionTwo.text}</h5>
          <button
            style={{ backgroundColor: answered && "grey" }}
            type="button"
            className="block"
            onClick={options}
            disabled={answered}
            value='optionTwo'
          >
          {answered ? "Answered" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {

//   const users = state.users;
// const authedUser =state.authedUser;

// const questions = state.questions;
//   return {

//     userIds: Object.keys(users),
//     users,
//     authedUser,
//     questionIds: Object.keys(questions),
//     questions

//   }

// }


export default connect()(QuestionPreview);
