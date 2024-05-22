import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sound from "../components2/Sound";
import './learning.css'

const amharicNum = [
  "/sounds/1.mp3",
  "/sounds/2.mp3",
  "/sounds/3.mp3",
  "/sounds/4.mp3",
  "/sounds/5.mp3",
  "/sounds/6.mp3",
  "/sounds/7.mp3",
  "/sounds/8.mp3",
  "/sounds/9.mp3",
  "/sounds/10.mp3",
  "/sounds/11.mp3",
  "/sounds/12.mp3",
  "/sounds/20.mp3",
  "/sounds/21.mp3",
  "/sounds/22.mp3",
  "/sounds/30.mp3",
  "/sounds/40.mp3",
  "/sounds/50.mp3",
  "/sounds/60.mp3",
  "/sounds/70.mp3",
  "/sounds/80.mp3",
  "/sounds/90.mp3",
  "/sounds/100.mp3",
  "/sounds/1000.mp3",
];

const numPic = ["/images/numbersImg/1.webp",
                "/images/numbersImg/2.webp",
                "/images/numbersImg/3.webp",
                "/images/numbersImg/4.webp",
                "/images/numbersImg/5.webp",
                "/images/numbersImg/6.webp",
                "/images/numbersImg/7 (2).webp",
                "/images/numbersImg/8.webp",
                "/images/numbersImg/9.webp",
                "/images/numbersImg/10.webp",
                "/images/numbersImg/11.webp",
                "/images/numbersImg/12.webp",
                "/images/numbersImg/20.webp",
                "/images/numbersImg/21.webp",
                "/images/numbersImg/22.webp",
                "/images/numbersImg/30.webp",
                "/images/numbersImg/40.webp",
                "/images/numbersImg/50.webp",
                "/images/numbersImg/60.webp",
                "/images/numbersImg/70.webp",
                "/images/numbersImg/80.webp",
                "/images/numbersImg/90.webp",
                "/images/numbersImg/100.webp",
                "/images/numbersImg/1000.webp",
];

const numName=['One',
               'Two',
               'Three',
               'Four',
               'Five',
               'Six',
               'Seven',
               'Eigth',
               'Nine',
               'Ten',
               'Eleven',
               'Twelve',
               'twenty',
               'Twenty One',
               'Twenty Two',
               'Thirty',
               'Forty',
               'Fifty',
               'Sixty',
               'Seventy',
               'Eighty',
               'Ninty',
               'One Hundred',
               'One Thousand',
]

const Numbers = () => {
  const [num, setNum] = useState([]);

  useEffect(() => {
    allNum();
  }, []);

  const allNum = async () => {
    try {
      const res = await fetch("/numbers");
      const data = await res.json();
      console.log(data);
      setNum(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="NavB">
        <Link to={"/"}>Home </Link>
        <Link to={"/colors"}>Colors </Link>
        <Link to={"/animals"}>Animals </Link>
      </div>
      <h1 id="text">Numbers</h1>

      <div className="card-container">
        {num.map((item, index) => (
          <div key={item.numbers} className="card">
            <h2>{item.numbers}</h2>

            <Sound soundFile={amharicNum[index]} />
            <h2>{numName[index]}</h2>
            <img src={numPic[index]}/>
          </div>
        ))}
      </div>
      <div className="link">
            <a href="QuizNum"><h2>Click Here To Start the Quiz</h2></a>
      </div>
    </>
  );
};

export default Numbers;
