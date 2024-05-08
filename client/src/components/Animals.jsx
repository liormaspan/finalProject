import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Sound from "../components2/Sound";


const amharicAni=[
    '/sounds/animals/dog.mp3',
    '/sounds/animals/cat.mp3',
    '/sounds/animals/sheep.mp3',
    '/sounds/animals/bird.mp3',
    '/sounds/animals/goat.mp3',
    '/sounds/animals/pig.mp3',
    '/sounds/animals/cow.mp3',
    '/sounds/animals/ox.mp3',
    '/sounds/animals/rooster.mp3',
    '/sounds/animals/chicken.mp3',
    '/sounds/animals/donkey.wav',
    '/sounds/animals/horse.mp3',
    '/sounds/animals/fish.mp3',
    '/sounds/animals/camel.mp3',
    '/sounds/animals/crocodile.mp3',
    '/sounds/animals/bear.mp3',
    '/sounds/animals/elephant.mp3',
    '/sounds/animals/duck.mp3',
    '/sounds/animals/egale.mp3',
    '/sounds/animals/fox.mp3',
    '/sounds/animals/lion.mp3',
    '/sounds/animals/hyena.mp3',
    '/sounds/animals/tiger.mp3',
    '/sounds/animals/turtle.mp3'
]

const imgAni=[
    '/images/animalsImg/dog_files/pngtree-cartoon-dog-puppy-sticker-cute-png-image_6629416.png',
    '/images/animalsImg/cat_files/pngtree-cat-cartoon-png-image_9029157.png',
    '/images/animalsImg/sheep_files/pngtree-sheep-cartoon-cute-png-image_14625965.png',
    '/images/animalsImg/bird.png',
    '/images/animalsImg/goat2_files/pngtree-illustration-of-a-cute-goat-cartoon-style-png-image_14581761.png',
    '/images/animalsImg/pig3_files/pngtree-fat-pig-cartoon-logo-illustration-clipart-animal-character-game-asset-pet-png-image_6137654.png',
    '/images/animalsImg/cow2_files/pngtree-cartoon-hand-painted-cow-cartoon-png-image_7164633.png',
    '/images/animalsImg/ox_files/pngtree-original-golden-ox-cartoon-hand-painted-golden-ox-modeling-mouse-painted-png-image_7156831.png',
    '/images/animalsImg/rooster_files/pngtree-rooster-png-image_8984660.png',
    '/images/animalsImg/chicken_files/pngtree-cute-chicken-cartoon-characters-vector-illustration-png-image_7513124.png',
    '/images/animalsImg/donkey_files/pngtree-cartoon-donkey-vector-material-png-image_7157069.png',
    '/images/animalsImg/horse_files/pngtree-cute-horse-cartoon-characters-vector-illustration-png-image_7513120.png',
    '/images/animalsImg/fish2_files/pngtree-clown-fish-cartoon-png-image_7716293.png',
    '/images/animalsImg/camel3_files/pngtree-camel-cartoon-illustration-free-vector-design-png-image_9260120.png',
    '/images/animalsImg/crocodile2_files/pngtree-happy-and-stylish-alligator-vector-illustration-design-png-image_8989297.png',
    '/images/animalsImg/bear_files/pngtree-bear-standup-cartoon-png-image_6841564.png',
    '/images/animalsImg/elephant_files/pngtree-cartoon-elephant-creative-elements-png-image_7371972.png',
    '/images/animalsImg/duck_files/pngtree-gray-cute-cartoon-duck-graphic-png-image_6191913.png',
    '/images/animalsImg/eagle.png',
    '/images/animalsImg/fox_files/pngtree-fox-cat-cartoon-vector-png-image_13797666.png',
    '/images/animalsImg/lion_files/pngtree-vector-picture-cute-cartoon-lion-animal-png-image_7224902.png',
    '/images/animalsImg/hyena_files/pngtree-hyena-cartoon-character-on-a-transparent-background-generative-ai-png-image_14753985.png',
    '/images/animalsImg/tiger_files/pngtree-cartoon-hand-drawn-cute-tiger-head-png-image_7144846.png',
    '/images/animalsImg/turtle_files/pngtree-cute-turtle-pirate-waving-hand-cartoon-vector-icon-illustration-animal-holiday-png-image_13370184.png',
]


const AniName=[
    'Dog',
    'Cat',
    'Sheep',
    'Bird',
    'Goat',
    'Pig',
    'Cow',
    'Ox',
    'Rooster',
    'Chicken',
    'Donkey',
    'Horse',
    'Fish',
    'Camel',
    'Crocodile',
    'Bear',
    'Elephant',
    'Duck',
    'Eagle',
    'Fox',
    'Lion',
    'Hyena',
    'Tiger',
    'Turtle',
]

const Animals = (props) => {
    const [ani, setAni] = useState([]);

    useEffect(() => {
        allAni();
    }, []);

    const allAni = async () => {
        const res = await fetch('http://localhost:5000/animals');
        const data = await res.json();
        setAni(data);
    };

    return (
        <>
            <div className="NavB">
                <Link to={'/'}>Home </Link>
                <Link to={'/numbers'}>Numbers </Link>
                <Link to={'/colors'}>Colors </Link>
            </div>
            <h1 id="text">Animals</h1>

            <div className="card-container">
                {ani.map((item,index) => (
                    <div key={item.animals} className="card">
                    <h4>{item.animals}</h4>
                    <Sound soundFile={amharicAni[index]} />
                    <h2>{AniName[index]}</h2>   
                    <img src={imgAni[index]}/>
                    </div>
                ))}
            </div>

            <div className="link">
            <a href="QuizAni"><h2>Click Here To Start the Quiz</h2></a>
      </div>
        </>
    );
};

export default Animals;
