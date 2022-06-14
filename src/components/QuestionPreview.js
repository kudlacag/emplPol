import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
// import userOne from '../images/user1.jpg'
import { handleAddanswer } from "../actions/saveAnswer";

function QuestionPreview({
  dispatch,
  questions,
  users,
  questionIds,
  userIds,
  authedUser,
}) {
  // const { state } = useLocation();
  const navigate = useNavigate();

  // const { questions, users, questionIds, userIds, authedUser } = state;
  let { id } = useParams();
  const newId = questionIds?.filter((qId) => {
    return qId === id;
  });
  const [answer, setAnswer] = useState();

  const options = (e) => {
    e.preventDefault();
    setAnswer(e.target.value);
    setTimeout(() => {
      navigate("/");
    }, 300);
  };

  const photo = userIds?.filter((user) => {
    return users[user];
  });

  const newPhoto = photo.filter((fot) => {
    return questions[newId].author === fot;
  });

  const answered = Object.keys(users[authedUser]?.answers).includes(id);

  if (authedUser && id && answer) {
    dispatch(handleAddanswer(authedUser, id, answer));
  }

  return (
    <>
      {typeof authedUser !== "object" && (
        <div key={questions[newId].id}>
          <h3>Poll by {questions[newId].author}</h3>

          <img
            src={users[newPhoto].avatarURL}
            alt="username"
            style={{ borderRadius: "50%", width: "350px", height: "auto" }}
          />

          <h3>Would You Rather</h3>
          <div className="row ">
            {answered ? (
              <>
                {questions[newId].optionOne.votes.includes(authedUser) ? (
                  <h4
                    style={{
                      color: "green",
                      backgroundColor: "grey",
                      padding: "15px",
                    }}
                  >
                    You voted for option One
                  </h4>
                ) : (
                  <h4
                    style={{
                      color: "green",
                      backgroundColor: "grey",
                      padding: "15px",
                    }}
                  >
                    You voted for option Two
                  </h4>
                )}{" "}
                <div className="col s6">
                  <div>
                    <h5>{questions[newId].optionOne.text}</h5>
                    <p>
                      {" "}
                      {`${
                        questions[newId].optionOne.votes.length > 0
                          ? ` ${questions[newId].optionOne.votes.length} user(s) voted for option One`
                          : "no one voted for option Two"
                      } `}
                    </p>
                    <p>
                      {" "}
                      {Math.round(
                        (questions[newId].optionOne.votes.length /
                          userIds.length) *
                          100
                      )}{" "}
                      % of the Users voted for Option One
                    </p>
                  </div>

                  <button
                    style={{ backgroundColor: answered && "grey" }}
                    type="button"
                    className="block"
                    onClick={options}
                    disabled={answered}
                    value="optionOne"
                  >
                    {answered ? "Answered" : "Select"}
                  </button>
                </div>
                <div className="col s6">
                  <div>
                    <h5>{questions[newId].optionTwo.text}</h5>
                    <p>
                      {" "}
                      {`${
                        questions[newId].optionTwo.votes.length > 0
                          ? `${questions[newId].optionTwo.votes.length} user(s) voted for option Two`
                          : "no one voted for option Two"
                      } `}
                    </p>
                    <p>
                      {" "}
                      {Math.round(
                        (questions[newId].optionTwo.votes.length /
                          userIds.length) *
                          100
                      )}{" "}
                      % of the Users voted for Option Two
                    </p>
                  </div>
                  <button
                    style={{ backgroundColor: answered && "grey" }}
                    type="button"
                    className="block"
                    onClick={options}
                    disabled={answered}
                    value="optionTwo"
                  >
                    {answered ? "Answered" : "Select"}
                  </button>
                </div>
              </>
            ) : (
              <>
                {" "}
                <div className="col s6">
                  <h5>{questions[newId].optionOne.text}</h5>

                  <button
                    style={{ backgroundColor: answered && "grey" }}
                    type="button"
                    className="block"
                    onClick={options}
                    disabled={answered}
                    value="optionOne"
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
                    value="optionTwo"
                  >
                    {answered ? "Answered" : "Select"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  const questionIds = Object.keys(questions);
  const userIds = Object.keys(users);

  return {
    questions,
    users,
    questionIds,
    userIds,
    authedUser,
  };
};

export default connect(mapStateToProps)(QuestionPreview);
