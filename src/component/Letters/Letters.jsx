import Letter from "../Letter/Letter";
import { useSelector } from "react-redux";
import "./Letters.css";

const Letters = () => {
  const lettersData = useSelector((state) => state);

  const keys = Object.keys(lettersData.letters);

  return (
    <div className="container">
      {keys.map((letter) => {
        return (
          <div key={letter.letterID}>
            <Letter letter={lettersData.letters[letter]} />
          </div>
        );
      })}
    </div>
  );
};

export default Letters;
