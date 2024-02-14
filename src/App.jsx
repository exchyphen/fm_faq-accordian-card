import { useState } from "react";
import "./App.css";
import Question from "./components/question";

function App() {
  const [currQuestion, setCurrQuestion] = useState(-1);

  const questions = [
    "How many team members can I invite?",
    "What is the maximum file upload size?",
    "How do I reset my password?",
    "Can I cancel my subscription?",
    "Do you provide additional support?",
  ];

  const answers = [
    "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    "No more than 2GB. All files in your account must fit your allotted storage space.",
    'Click "Forgot password” from the login page or “Change password” from your sprofile page. A reset link will be emailed to you.',
    "Yes! Send us a message and we’ll process your request no questions asked.",
    "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  ];

  const [displayAnswers, setDisplayAnswers] = useState(
    Array(answers.length).fill(false)
  );

  const toggleAnswer = (num) => {
    const newDisplay = Array.from(displayAnswers);

    // retract existing
    if (currQuestion >= 0) {
      newDisplay[currQuestion] = false;
    }

    // if clicked active answer -> only retract, otherwise display the new answer
    if (currQuestion === num) {
      setCurrQuestion(-1);
    } else {
      newDisplay[num] = true;
      setCurrQuestion(num);
    }

    setDisplayAnswers(newDisplay);
  };

  const createQuestionComponents = () => {
    const questionComponentArr = Array(questions.length);
    for (let i = 0; i < questions.length; i++) {
      questionComponentArr[i] = (
        <Question
          key={`QuestionComp${i}`}
          question={questions[i]}
          answer={answers[i]}
          onClick={() => toggleAnswer(i)}
          active={displayAnswers[i]}
        ></Question>
      );
    }
    return questionComponentArr;
  };

  return (
    <>
      <div className="main-container">
        <div className="box-img"></div>
        <div className="inner-card">
          <div className="hero-img-wrapper"></div>
          <div className="faq-container">
            <h1>FAQ</h1>
            {createQuestionComponents()}
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/exchyphen" target="_blank">
          exc
        </a>
        .
      </div>
    </>
  );
}

export default App;
