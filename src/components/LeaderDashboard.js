import React from "react";
import { connect } from "react-redux";
import UserOne from "../images/user1.jpg";

function LeaderDashboard({ users}) {


// but this one is not working it says map is not a function 
// because users are at first null or undefined
  console.log(users.map((user) => {
    return user.id
  }))

  // this one works and i get the data after 3 seconds 
  console.log(users)


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
          <tr>
            <td>
              {" "}
              <div className="row">
                {" "}
                <div className="col s2">
                  <img
                    src={UserOne}
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
                <h5>Sarah Edo</h5>
                  <span>sarahedo</span>
                </div>
              </div>
            </td>
            <td>4</td>
          
            <td>2</td>
          </tr>
          <tr>
            <td>
              {" "}
              <div className="row">
                {" "}
                <div className="col s2">
                  <img
                    src={UserOne}
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
                <h5>Sarah Edo</h5>
                  <span>sarahedo</span>
                </div>
              </div>
            </td>
            <td>4</td>
            <td>2</td>
          </tr>
          <tr>
            <td>
              {" "}
              <div className="row">
                {" "}
                <div className="col s2">
                  <img
                    src={UserOne}
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
                <h5>Sarah Edo</h5>
                  <span>sarahedo</span>
                </div>
              </div>
            </td>
            <td>4</td>
            <td>2</td>
          </tr>
          <tr>
            <td>
              {" "}
              <div className="row">
                {" "}
                <div className="col s2">
                  <img
                    src={UserOne}
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
                  <h5>Sarah Edo</h5>
                  <span>sarahedo</span>
                </div>
              </div>
            </td>
            <td>4</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = ({users}) => {
  return { users}
}
export default connect(mapStateToProps)(LeaderDashboard);
