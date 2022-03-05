import { createStore } from "redux";

const intialState = {
  page: "HomePage",
  letters: [
    {
      letterID: "1",
      letterName: "A",
      letterAudio: "mp3",
      letterWords: ["Ant", "Air", "Ape", "Ark", "Axe", "Art", "Add"],
    },
    {
      letterID: "2",
      letterName: "B",
      letterAudio: "mp3",
      letterWords: ["Bacon", "Bee", "Ball", "Bat", "Box", "Brain", "Bin"],
    },
    {
      letterID: "3",
      letterName: "C",
      letterAudio: "mp3",
      letterWords: ["Cat", "Card", "Cow", "Can", "Cod", "Cry", "Coin"],
    },
  ],
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "HOMEPAGE":
      return { ...state, page: "HomePage" };

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
