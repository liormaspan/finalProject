import "../../src/App";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import Sound from "../components2/Sound";

const question = [
    {
        text: "What Animal is Wsha in Amharic?",
        // imageUrl:"/sounds/mqdefault.jpg",
        // soundUrl:"../../public/sounds/animals/dog.mp3",
        option: [
          { id: 0, text: 'Cat', isCorrect: false },
          { id: 1, text: 'Horse', isCorrect: false },
          { id: 2, text: 'Dog', isCorrect: true },
          { id: 3, text: 'Fish', isCorrect: false },
        ],
      },
      {
        text: "What Animal is Dimet in Amharic?",
        option: [
          { id: 0, text: 'Cat', isCorrect: true },
          { id: 1, text: 'Pig', isCorrect: false },
          { id: 2, text: 'Donky', isCorrect: false },
          { id: 3, text: 'Rabbit', isCorrect: false },
        ],
      },
      {
        text: "What Animal is Anbesa in Amharic??",
        option: [
          { id: 0, text: 'Chicken', isCorrect: false },
          { id: 1, text: 'Lion', isCorrect: true },
          { id: 2, text: 'Eagle', isCorrect: false },
          { id: 3, text: 'Fox', isCorrect: false },
        ],
      },
      {
        text: "What Animal is Gmel in Amharic?",
        option: [
          { id: 0, text: 'Fish', isCorrect: false },
          { id: 1, text: 'Camel', isCorrect: true },
          { id: 2, text: 'Hyena', isCorrect: false },
          { id: 3, text: 'Goat', isCorrect: false },
        ],
      },
      {
        text: "What Animal is Beg in Amharic?",
        option: [
          { id: 0, text: 'Turtle', isCorrect: false },
          { id: 1, text: 'Sheep', isCorrect: true },
          { id: 2, text: 'Cow', isCorrect: false },
          { id: 3, text: 'Duck', isCorrect: false },
        ],
      },
];



const QuizAni = (props) => {
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
          <h3>{question[currentQuestion].text}
           </h3>
           <img style={{width:'200px',borderRadius:'20px'}} src={question[currentQuestion].imageUrl}/>
           {/* <Sound src={question[currentQuestion].soundUrl}/> */}

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
            <Link to={"/Animal"}>Go Back </Link>
    </div>
  );
};

export default QuizAni;