import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import userOne from '../images/user1.jpg';

function QuestionPreview(props) {

  const {userIds,
    users,
    authedUser,
    questionIds,
    questions} = props;

    let { id } = useParams()
    // console.log(id)
   

   const newId = questionIds.filter((qId) => {
    return qId === id
  });

  const photo = userIds.filter((user) => {
    return users[user]
  });
  const newPhoto = photo.filter((fot) => {
    return questions[newId].author === fot  
  });
  // console.log(newPhoto)

  return (
    <div key={questions[newId].id}>
        <h3>Poll by {questions[newId].author}</h3>
     
        <img src={users[newPhoto].avatarURL} alt="username" style={{borderRadius: '50%', width: '350px', height:'auto'}}/>
        
        <h3>Would You Rather</h3>
        <div className='row '>
            <div className='col s6'>
                <h5>{questions[newId].optionOne.text}</h5>
                <button type="button" className="block">Select</button>
                
            </div>
            <div className='col s6'>
            <h5>{questions[newId].optionTwo.text}</h5>
            <button type="button" className="block">Select</button>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {

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
export default connect(mapStateToProps)(QuestionPreview);