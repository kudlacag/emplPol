import React, { Fragment } from "react";
import { formatDate } from "../data/helpers";
import { connect } from "react-redux";
// import userOne from '../images/user1.jpg'
import { useNavigate } from "react-router-dom";

function Questions({ userIds, authedUser, questionIds, questions, users }) {
  const navigate = useNavigate();

  return (
    <Fragment>
      {/* new questions */}

      {typeof authedUser !== "object" && (
        <>
          <div className="row">
            <div className="col s12" style={{ borderBottom: "1px solid grey" }}>
              <h2>New Questions</h2>
            </div>

            <ul className="row">
              {questionIds?.map((ques) => {
                const { author, id, timestamp, optionOne, optionTwo } =
                  questions[ques];
                if (
                  !optionOne?.votes?.includes(authedUser) &&
                  !optionTwo?.votes?.includes(authedUser)
                ) {
                  return (
                    <li className="col s4" key={id}>
                      <h4>{author}</h4>
                      <p>{formatDate(timestamp)}</p>
                      <button
                        type="button"
                        className="block"
                        onClick={() => {
                          navigate(`questions/${id}`, {
                            state: {
                              questionIds,
                              userIds,
                              users,
                              questions,
                              authedUser,
                            },
                          });
                        }}
                      >
                        Show
                      </button>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </>
      )}

      {/* done questions code */}

      {typeof authedUser !== "object" ? (
        <>
          <div className="row">
            <div className="col s12" style={{ borderBottom: "1px solid grey" }}>
              <h2>Done</h2>
            </div>
            <div className="row">
              {questionIds?.map((ques) => {
                const { id, author } = questions[ques];
                if (
                  questions[ques]?.optionTwo?.votes?.includes(authedUser) ||
                  questions[ques]?.optionOne?.votes?.includes(authedUser)
                ) {
                  return (
                    <li className="col s4" key={id}>
                      <h4>{author}</h4>
                      <p>{formatDate(questions[ques]?.timestamp)}</p>

                      <button
                        onClick={() => {
                          navigate(`questions/${id}`, {
                            state: {
                              questionIds,
                              userIds,
                              users,
                              questions,
                              authedUser,
                            },
                          });
                        }}
                        type="button"
                        className="block"
                      >
                        Show
                      </button>
                    </li>
                  );
                }
              })}
            </div>
          </div>
        </>
      ) : (
        <h3
          style={{
            padding: "100px",
            color: "red",
          }}
        >
          Please log in again
        </h3>
      )}
    </Fragment>
  );
}

function mapStateToProps(state) {
  const users = state.users;
  const authedUser = state.authedUser;

  const questions = state.questions;
  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  return {
    userIds: Object.keys(users),
    users,
    authedUser,
    questionIds,
    questions,
  };
}

export default connect(mapStateToProps, null)(Questions);
