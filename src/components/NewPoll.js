import React, { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/saveQuestion";
// import Questions from './Questions';
import { useNavigate } from "react-router-dom";

function NewPoll({ authedUser, dispatch }) {
  const navigate = useNavigate();

  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [error, setError] = useState("");

  function generateUID() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
  let id = generateUID();

  const handleFirstOption = (e) => {
    const text = e.target.value;
    setOptionOne(text);
  };
  const handleSecondOption = (e) => {
    const text = e.target.value;
    setOptionTwo(text);
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();
    if (!authedUser || !optionOne || !optionTwo) {
      setError(true);
    } else {
      dispatch(handleAddQuestion(id, authedUser, optionOne, optionTwo));

      setOptionOne("");
      setOptionTwo("");

      navigate("/");
    }
  };

  const input1 = document.getElementById("input-1");
  const input2 = document.getElementById("input-2");
  if (error) {
    input1.style.border = "3px solid red";
    input2.style.border = "3px solid red";
  }

  return (
    <form onSubmit={handleOnsubmit} style={{ marginBottom: "10px" }}>
      {typeof authedUser !== "object" ? (
        <>
          <h3>Would You Rather</h3>
          <h5>Create Your Own Poll</h5>
          <h5>First Option</h5>
          <input
            type="text"
            name="foption"
            value={optionOne}
            onChange={handleFirstOption}
            data-testid="foption"
            id="input-1"
          />
          <h5>First Option</h5>
          <input
            type="text"
            name="soption"
            value={optionTwo}
            onChange={handleSecondOption}
            data-testid="soption"
            id="input-2"
          />
          <button
            className="btn waves-effect waves-light"
            type="submit"
            value="Submit"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>{" "}
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
    </form>
  );
}

const mapStateToProps = ({ authedUser, users }) => {
  const userIds = Object.keys(users);

  return {
    authedUser,
    userIds,
    users,
  };
};

export default connect(mapStateToProps)(NewPoll);
