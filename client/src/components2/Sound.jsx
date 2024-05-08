import React from "react";
import { useSound } from "use-sound";

const Sound = ( {soundFile} ) => {
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

export default Sound;





