import Navbar from "../Navbar/Navbar";
import Letters from "../Letters/Letters";
import Letter from "../Letter/Letter";
import WordList from "../WordList/WordList";

const HomeArea = () => {
  // State which controls the screen thats displayed

  return (
    <>
      <Navbar />
      <Letters />
      <Letter />
      <WordList />
    </>
  );
};

export default HomeArea;
