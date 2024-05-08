import { useState,useEffect } from "react";
import { Link } from "react-router-dom"
import Sound from "../components2/Sound";

const amharicCol=[
    '/sounds/colors/green.ogg',
    '/sounds/colors/blue.mp3',
    '/sounds/colors/yellow.wav',
    '/sounds/colors/red.mp3',
    '/sounds/colors/black.mp3',
    '/sounds/colors/white.mp3',
    '/sounds/colors/gold.mp3',
    '/sounds/colors/grey.mp3',
    '/sounds/colors/brown.mp3',
    '/sounds/colors/pink.mp3',
    '/sounds/colors/babyBlue.mp3',
    '/sounds/colors/purple.wav',
    '/sounds/colors/orange.wav',
]

const imgCol=[
    '/images/colorsImg/green.jpg',
    '/images/colorsImg/blue.jpg',
    '/images/colorsImg/yellow.jpg',
    '/images/colorsImg/red.jpg',
    '/images/colorsImg/black.jpg',
    '/images/colorsImg/white.jpg',
    '/images/colorsImg/yellow.jpg',
    '/images/colorsImg/grey.jpg',
    '/images/colorsImg/brown.jpg',
    '/images/colorsImg/pink.jpg',
    '/images/colorsImg/blue.jpg',
    '/images/colorsImg/purple.jpg',
    '/images/colorsImg/orange.jpg',
]

const colName=[
    'Green',
    'Blue',
    'Yellow',
    'Red',
    'Black',
    'White',
    'Gold',
    'Grey',
    'Brown',
    'Pink',
    'Baby Blue',
    'Purple',
    'Orange',
]


const Colors=(props)=>{
    const [col,setCol]=useState([])

    useEffect(()=>{
        allCol()
    },[])


    const allCol=async()=>{    
        try{
        const res=await fetch('http://localhost:5000/colors')
        const data=await res.json()
        console.log(data);
        setCol(data)
    
        }catch(e){
            console.log(e);
        }
        
    }

    return(
        <>
        <div className="NavB">
        <Link to={'/'}>Home </Link>
        <Link to={'/numbers'}>Numbers </Link>
        <Link to={'/animals'}>Animals </Link>
        </div>

        <h1 id="text">Colors</h1>

        <div className="card-container">
            {col.map((item,index)=>(
                <div key={item.color} className="card">
                    <h2>{item.colors}</h2>
                    <Sound soundFile={amharicCol[index]} />
                    <h2>{colName[index]}</h2>
                    <img src={imgCol[index]}/>
                </div>
            ))}
        </div>
        <div className="link">
            <a href="QuizCol"><h2>Click Here To Start the Quiz</h2></a>
      </div>
        </>
    )
}

export default Colors;