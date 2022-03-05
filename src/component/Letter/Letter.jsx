import "./Letter.css";

const Letter = (props) => {
  const letter = props.letter;
  console.log("object");
  return (
    <>
      <div className="card">{letter}</div>
    </>
  );
};

export default Letter;
