import NavBar from "../NavBar/NavBar";
import Letters from "../Letters/Letters";
import Tigers_Reading_logo from "../Img/Tigers_Reading_logo.png";
// import Letter from "../Letter/Letter";
// import WordList from "../WordList/WordList";
import "./HomeArea.css";

const HomeArea = () => {
  // State which controls the screen thats displayed

  return (
    <>
      <header>
        <h1 className="header__logo">
          <img src={Tigers_Reading_logo} alt="Tiger's Reading App Logo"></img>
        </h1>
        <NavBar />
      </header>
      <Letters />
      {/* <Letter />
      <WordList /> */}
    </>
  );
};

export default HomeArea;
