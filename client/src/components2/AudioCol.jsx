import React from "react";
import { useSound } from "use-sound";

const AudioCol = ( {soundFile} ) => {
    const [play] = useSound(soundFile);

    const handleClick = () => {
        play();
    };

    return (
        <div>
            <button onClick={handleClick}>Play</button>
        </div>
    );
};

export default AudioCol;