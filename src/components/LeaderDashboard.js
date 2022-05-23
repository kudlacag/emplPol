import userEvent from "@testing-library/user-event";
import React from "react";
import { connect } from "react-redux";
import UserOne from "../images/user1.jpg";

function LeaderDashboard({ users, userIds}) {
  
  // console.log(userPhoto)


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>

        <tbody>


          {
            userIds.map((user) => {
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
              
                <td>{users[user].questions.length}</td>
              </tr>
            )})
          }
        
        </tbody>
      </table>
    </div>
  );
}

function mapStateToProps(state) {
  const users = state.users;
 const  userIds = Object.keys(users);

  return {
    users,
    userIds,
  }
}
export default connect(mapStateToProps)(LeaderDashboard);
