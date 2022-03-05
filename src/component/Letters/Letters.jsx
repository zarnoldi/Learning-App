import Letter from "../Letter/Letter";
import { useSelector } from "react-redux";
import "./Letters.css";

const Letters = () => {
  const lettersData = useSelector((state) => state);

  return (
    <div className="container">
      {lettersData.letters.map((letter) => {
        console.log("object");
        return (
          <div key={letter.letterID}>
            <Letter letter={letter.letterName} />
          </div>
        );
      })}
    </div>
  );
};

export default Letters;
