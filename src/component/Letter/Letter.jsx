import { useState } from "react";
import "./Letter.css";

const Letter = (props) => {
  const [show, setShow] = useState(false);

  const showData = () => {
    setShow(!show);
  };

  const letter = props.letter;
  console.log("object");
  return (
    <>
      <div onClick={showData} className="card flexContainer">
        <div>
          <h2>{letter.letterName}</h2>
        </div>
        <div>
          <ul className="flexContainer">
            {show &&
              letter.letterWords.map((word) => {
                return <li className="word">{word}</li>;
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Letter;
