import "../../src/App";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


const question = [
    {
        text: "What color is Tqur in Amharic?",
        option: [
          { id: 0, text: 'Green', isCorrect: false },
          { id: 1, text: 'White', isCorrect: false },
          { id: 2, text: 'Black', isCorrect: true },
          { id: 3, text: 'Purple', isCorrect: false },
        ],
      },
      {
        text: "What color is Brtukanma in Amharic?",
        option: [
          { id: 0, text: 'Orange', isCorrect: true },
          { id: 1, text: 'Blue', isCorrect: false },
          { id: 2, text: 'Red', isCorrect: false },
          { id: 3, text: 'Pink', isCorrect: false },
        ],
      },
      {
        text: "What color is Qey in Amharic??",
        option: [
          { id: 0, text: 'Grey', isCorrect: false },
          { id: 1, text: 'Red', isCorrect: true },
          { id: 2, text: 'Baby Blue', isCorrect: false },
          { id: 3, text: 'Brown', isCorrect: false },
        ],
      },
      {
        text: "What color is Werqama in Amharic?",
        option: [
          { id: 0, text: 'Black', isCorrect: false },
          { id: 1, text: 'Gold', isCorrect: true },
          { id: 2, text: 'White', isCorrect: false },
          { id: 3, text: 'Yellow', isCorrect: false },
        ],
      },
      {
        text: "What color is Arenguadae in Amharic?",
        option: [
          { id: 0, text: 'Red', isCorrect: false },
          { id: 1, text: 'Green', isCorrect: true },
          { id: 2, text: 'Purple', isCorrect: false },
          { id: 3, text: 'Blue', isCorrect: false },
        ],
      },
];



const QuizCol = (props) => {
  const [finalRes, setFinalRes] = useState(false);

  const [score, setScore] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);



  const optionClicked=(isCorrect)=>{
    if(isCorrect){
        setScore(score+1)
    }

    if(currentQuestion+1 <question.length){
      setCurrentQuestion(currentQuestion+1)  
    }else{
        setFinalRes(true)
    }
    
  }

  const restartGame=()=>{
    setScore(0)
    setCurrentQuestion(0)
    setFinalRes(false)
  }
  return (
    <div className="Quiz">
      <h1>Colors Quiz</h1>
      <h2>Current Score: {score}</h2>

      {finalRes ? (
        <div className="finalResult">
          <h2>Final Result</h2>
          <h3> {score} out of {question.length} - ({(score/question.length) * 100}%)</h3>
          <button onClick={()=>restartGame()}>Restart Game</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question {currentQuestion + 1} of {question.length}
          </h2>
          <h3>{question[currentQuestion].text}</h3>

          <ul>
            {question[currentQuestion].option.map((option) => {
              return (
                <li onClick={() =>optionClicked(option.isCorrect)} key={option.id}>
                    {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
            <Link to={"/Color"}>Go Back </Link>
    </div>
  );
};

export default QuizCol;