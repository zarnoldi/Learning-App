import { useState } from "react";
import "./Letter.css";
// import { Howl, Howler } from "howler";

const Letter = (props) => {
  const [show, setShow] = useState(false);

  var synth = window.speechSynthesis;

  const speak = (word) => {
    let utterThis = new SpeechSynthesisUtterance(word);
    synth.speak(utterThis);
  };

  const showData = () => {
    setShow(!show);
  };

  const handlePlay = (audioClip) => {
    const audio = new Audio(audioClip);
    audio.play();
  };

  const letter = props.letter;
  console.log("object");
  return (
    <>
      <div className="card flexContainer">
        <div onClick={showData}>
          <img
            className="letter__img"
            alt={letter.letterId}
            src={letter.letterImg}
          />
        </div>
        <div>
          <button
            className="sound__btn"
            onClick={() => handlePlay(letter.letterAudio)}
          >
            Play Sound
          </button>
        </div>

        <div>
          <ul className="flexContainer">
            {show &&
              letter.letterWords.map((word) => {
                return (
                  <li className="word" onClick={() => speak(word)}>
                    {word}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Letter;
