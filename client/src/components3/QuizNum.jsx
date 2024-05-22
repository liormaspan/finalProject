import "../../src/App";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './quiz.css'

const question = [
    {
        text: "What is the number AND is?",
        option: [
          { id: 0, text: '5', isCorrect: false },
          { id: 1, text: '12', isCorrect: false },
          { id: 2, text: '1', isCorrect: true },
          { id: 3, text: '6', isCorrect: false },
        ],
      },
      {
        text: "What is the number ARAT is?",
        option: [
          { id: 0, text: '4', isCorrect: true },
          { id: 1, text: '10', isCorrect: false },
          { id: 2, text: '8', isCorrect: false },
          { id: 3, text: '20', isCorrect: false },
        ],
      },
      {
        text: "What is the number ASRA HMIST is?",
        option: [
          { id: 0, text: '35', isCorrect: false },
          { id: 1, text: '15', isCorrect: true },
          { id: 2, text: '7', isCorrect: false },
          { id: 3, text: '3', isCorrect: false },
        ],
      },
      {
        text: "What is the number AYA HULAT is?",
        option: [
          { id: 0, text: '64', isCorrect: false },
          { id: 1, text: '13', isCorrect: true },
          { id: 2, text: '77', isCorrect: false },
          { id: 3, text: 22, isCorrect: true },
        ],
      },
      {
        text: "What is the number SIDIST is?",
        option: [
          { id: 0, text: '9', isCorrect: false },
          { id: 1, text: '6', isCorrect: true },
          { id: 2, text: '23', isCorrect: false },
          { id: 3, text: '3', isCorrect: false },
        ],
      },
];



const QuizNum = (props) => {

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
      <h1>Numbers Quiz</h1>
      <h2>Current Score: {score}</h2>

      {finalRes ? (
        <div className="finalResult">
          <h2>Final Result</h2>
          <h3> {score} out of {question.length} -({(score/question.length) * 100}%)</h3>
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
            <Link to={"/Number"}>Go Back </Link>
    </div>
  );
};

export default QuizNum;
