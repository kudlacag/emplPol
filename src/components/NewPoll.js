import React, { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/saveQuestion";
// import Questions from './Questions';
import { useNavigate } from "react-router-dom";

function NewPoll({ authedUser, dispatch, users, userIds }) {
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
  console.log(authedUser !== null);
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
    dispatch(handleAddQuestion(id, authedUser, optionOne, optionTwo));

    setOptionOne("");
    setOptionTwo("");

    navigate("/");
  };

  return (
    <form onSubmit={handleOnsubmit} style={{ marginBottom: "10px" }}>
      {authedUser !== null && (
        <>
          <h3>Would You Rather</h3>
          <p>Create Your Own Poll</p>
          <h6>First Option</h6>
          <input
            type="text"
            name="foption"
            value={optionOne}
            onChange={handleFirstOption}
            data-testid="foption"
          />
          <h6>First Option</h6>
          <input
            type="text"
            name="soption"
            value={optionTwo}
            onChange={handleSecondOption}
            data-testid="soption"
          />
          <button
            className="btn waves-effect waves-light"
            type="submit"
            value="Submit"
            disabled={error}
          >
            Submit
            <i className="material-icons right">send</i>
          </button>{" "}
        </>
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
