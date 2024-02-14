import "./question.css";

const Question = (props) => {
  return (
    <div className="dropdown-container" onClick={props.onClick}>
      {props.active ? (
        <div className="question-container">
          <div className="question-text-active">{props.question}</div>
          <div className="dropdown-icon dropdown-icon-active"></div>
        </div>
      ) : (
        <div className="question-container">
          <div className="question-text">{props.question}</div>
          <div className="dropdown-icon"></div>
        </div>
      )}
      {props.active ? <div className="answer-text">{props.answer}</div> : null}
    </div>
  );
};

export default Question;
