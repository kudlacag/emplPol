import React from "react";
import { connect } from "react-redux";

function LeaderDashboard({
  users,
  userIds,
  authedUser,
  questionIds,
  questions,
}) {
  return (
    <div>
      {typeof authedUser !== "object" ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Users</th>
                <th>Answered</th>
                <th>Created</th>
              </tr>
            </thead>

            <tbody>
              {userIds.map((user) => {
                return (
                  <tr key={users[user].id}>
                    <td>
                      {" "}
                      <div className="row">
                        {" "}
                        <div className="col s2">
                          <img
                            src={users[user].avatarURL}
                            alt="username"
                            style={{
                              verticalAlign: "middle",
                              marginTop: "20px",
                              width: "70px",
                              height: "auto",
                              borderRadius: "45%",
                            }}
                          />
                        </div>
                        <div className="col s2">
                          <h5>{users[user].name}</h5>
                          <span>{users[user].id}</span>
                        </div>
                      </div>
                    </td>
                    <td>{Object.keys(users[user].answers).length}</td>
                    {/* {console.log(questionIds)} */}

                    <td>
                      {
                        questionIds.filter(
                          (qu) => questions[qu].author === users[user].id
                        ).length
                      }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
    </div>
  );
}

function mapStateToProps(state) {
  const users = state.users;
  const authedUser = state.authedUser;
  const questions = state.questions;
  const questionIds = Object.keys(questions);
  const userIds = Object.keys(users).sort(
    (a, b) =>
      Object.keys(users[b].answers).length -
      Object.keys(users[a].answers).length +
      questionIds.filter((qu) => questions[qu].author === users[b].id).length -
      questionIds.filter((qu) => questions[qu].author === users[a].id).length
  );

  return {
    users,
    userIds,
    authedUser,
    questionIds,
    questions,
  };
}
export default connect(mapStateToProps)(LeaderDashboard);
