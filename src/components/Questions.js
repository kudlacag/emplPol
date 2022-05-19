import React, { Fragment, useEffect, useState } from 'react';
import { formatDate } from '../data/helpers';
import { connect } from 'react-redux'
// import userOne from '../images/user1.jpg'
import { useNavigate } from 'react-router-dom';

function Questions({ userIds, authedUser, questionIds, questions}) {

const navigate = useNavigate();

  // const toPoll = (id) => {
  //     navigate(`/question/:${id}`);
  //     console.log(id)
  // }


  return (
    <Fragment>
  {/* new questions */}
  <div className='row' >
            <div className='col s12' style={{ borderBottom: '1px solid grey'}}>
                <h2>New Questions</h2>
            </div>
  
            <ul className='row'>
  { questionIds.map((ques) => {
    if((!questions[ques].optionOne.votes.includes(authedUser)) && (!questions[ques].optionTwo.votes.includes(authedUser)) ){
      return     <li className='col s4' key={questions[ques].id}>
      <h4>{questions[ques].author}</h4>
      <p >{formatDate(questions[ques].timestamp)}</p>
 <button  type='button' className='block' onClick={() => {navigate(`/question/${questions[ques].id}`)}}>Show</button>
   </li>
     }
  })}
   </ul>
          

   
        </div>

      {/* done questions code */}
      <div className='row'>
            <div className='col s12' style={{ borderBottom: '1px solid grey'}}>
                <h2>Done</h2>
            </div>
            <div className='row'>

              {questionIds.map((ques) => {
                 if((questions[ques].optionTwo.votes.includes(authedUser)) || ( questions[ques].optionOne.votes.includes(authedUser)) ){
                  return     <li className='col s4' key={ques.id}>
                  <h4>{questions[ques].author}</h4>
                  <p >{formatDate(questions[ques].timestamp)}</p>

             <button onClick={() => {navigate(`/question/${questions[ques].id}`)}} type='button' className='block'>Show</button>
               </li>
                 }
        
              })}
                {/* <div className='col s4'>
                   <h4>mtsamis</h4>
                   <p>4:11 PM 12/12/2017</p>
                   <button type='button' className='block'>show</button>
                </div> */}
               
            </div>
        </div>
       {/* <NewQuestions />

       <DoneQuestions /> */}
    </Fragment>
  )
}

function mapStateToProps(state) {
  const users = state.users;
const authedUser =state.authedUser;
 
  const questions = state.questions;
  return {
    userIds: Object.keys(users),
    users,
    authedUser,
    questionIds: Object.keys(questions),
    questions,
  
  }

}

export default connect(mapStateToProps)(Questions);