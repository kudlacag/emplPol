import {
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
  _getQuestions,
} from "../data/_DATA";

describe("_saveQuestionAnswer", () => {
  it("will return true if it works", async () => {
    const trueAnswer = _saveQuestionAnswer({
      authedUser: "mtsamis",
      qid: "6ni6ok3ym7mf1p33lnez",
      answer: "optionTwo",
    });

    await expect(trueAnswer).resolves.toEqual(true);
  });
});

describe("_getUsers", () => {
  it("will return an Object", async () => {
    const { ...users } = await _getUsers();
    expect(users).toBeInstanceOf(Object);
  });

  it("will render the users", async () => {
    const userOne = "sarahedo";
    const { ...users } = await _getUsers();
    expect(users[userOne].id).toEqual("sarahedo");
    expect(users[userOne].password).toEqual("password123");
    expect(users[userOne].name).toEqual("Sarah Edo");
    expect(users[userOne].answers).toEqual({
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    });
    expect(users[userOne].questions).toEqual([
      "8xf0y6ziyjabvozdd253nd",
      "am8ehyc8byjqgar0jgpub9",
    ]);
  });
});

describe("_saveQuestions", () => {
  it("tests if the _saveQuestion works properly", async () => {
    const savedQuestion = await _saveQuestion({
      optionOneText: "Frontend",
      optionTwoText: "Backend",
      author: "Johny",
    });

    expect(savedQuestion.author).toEqual("Johny");
    expect(savedQuestion.optionOne.text).toEqual("Frontend");
    expect(savedQuestion.optionTwo.text).toEqual("Backend");
  });
});

describe("_getQuestions", () => {
  it("will return an Object", async () => {
    const { ...questions } = await _getQuestions();
    expect(questions).toBeInstanceOf(Object);
  });

  it("will show the first Object and it's values", async () => {
    const questionOne = "8xf0y6ziyjabvozdd253nd";
    const { ...questions } = await _getQuestions();
    expect(questions[questionOne].id).toEqual("8xf0y6ziyjabvozdd253nd");
    expect(questions[questionOne].author).toEqual("sarahedo");
    expect(questions[questionOne].timestamp).toEqual(1467166872634);
    expect(questions[questionOne].optionOne.votes).toEqual(["sarahedo"]);
    expect(questions[questionOne].optionTwo.text).toEqual(
      "Build our new application with Typescript"
    );
  });

  it("rejects while the user do not pass author", async () => {
    const newQuestion = _saveQuestion({
      optionOneText: "Frontend",
      optionTwoText: "Backend",
    });

    await expect(newQuestion).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
    expect(newQuestion).toBeInstanceOf(Promise);
  });
});
