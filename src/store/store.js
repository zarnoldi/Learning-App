import { createStore } from "redux";
import a from "../component/Img/a.png";
import b from "../component/Img/b.png";
import c from "../component/Img/c.png";
import d from "../component/Img/d.png";
import e from "../component/Img/e.png";
import f from "../component/Img/f.png";
import g from "../component/Img/g.png";
import h from "../component/Img/h.png";
import i from "../component/Img/i.png";
import j from "../component/Img/j.png";
import k from "../component/Img/k.png";
import l from "../component/Img/l.png";
import m from "../component/Img/m.png";
import n from "../component/Img/n.png";
import o from "../component/Img/o.png";
import p from "../component/Img/p.png";
import q from "../component/Img/q.png";
import r from "../component/Img/r.png";
import s from "../component/Img/s.png";
import t from "../component/Img/t.png";
import u from "../component/Img/u.png";
import v from "../component/Img/v.png";
import w from "../component/Img/w.png";
import x from "../component/Img/x.png";
import y from "../component/Img/y.png";
import z from "../component/Img/z.png";
import a_sound from "../component/Audio/a_sound.mp3";
import b_sound from "../component/Audio/b_sound.mp3";
import c_sound from "../component/Audio/c_sound.mp3";

const intialState = {
  page: "HomePage",
  letters: {
    A: {
      letterID: "1",
      letterName: "A",
      letterImg: a,
      letterAudio: a_sound,
      letterWords: ["Ant", "Air", "Ape", "Ark", "Axe", "Art", "Add"],
    },
    B: {
      letterID: "2",
      letterName: "B",
      letterImg: b,
      letterAudio: b_sound,
      letterWords: ["Bacon", "Bee", "Ball", "Bat", "Box", "Brain", "Bin"],
    },
    C: {
      letterID: "3",
      letterName: "C",
      letterImg: c,
      letterAudio: c_sound,
      letterWords: ["Cat", "Card", "Cow", "Can", "Cod", "Cry", "Coin"],
    },

    D: {
      letterID: "3",
      letterName: "D",
      letterImg: d,
      letterAudio: "mp3",
      letterWords: ["Dog", "Day", "Dream", "Dot", "Drive", "Dry", "Dig"],
    },

    E: {
      letterID: "4",
      letterName: "E",
      letterImg: e,
      letterAudio: "mp3",
      letterWords: ["Egg", "Enjoy", "Explore", "Empty", "Explain", "Energy"],
    },

    F: {
      letterID: "5",
      letterName: "F",
      letterImg: f,
      letterAudio: "mp3",
      letterWords: [
        "Frog",
        "Flip",
        "Fish",
        "Fox",
        "Friend",
        "Freckle",
        "Faces",
      ],
    },

    G: {
      letterID: "6",
      letterName: "G",
      letterImg: g,
      letterAudio: "mp3",
      letterWords: ["Grey", "Gap", "Goose", "Gold", "Grape", "Grab"],
    },

    H: {
      letterID: "7",
      letterName: "H",
      letterImg: h,
      letterAudio: "mp3",
      letterWords: ["Hop", "Help", "Hay", "Hold", "Hit", "Hand", "Horse"],
    },

    I: {
      letterID: "8",
      letterName: "I",
      letterImg: i,
      letterAudio: "mp3",
      letterWords: ["Igloo", "Ink", "Indigo", "Ivy", "Imp", "India"],
    },

    J: {
      letterID: "9",
      letterName: "J",
      letterImg: j,
      letterAudio: "mp3",
      letterWords: ["Jump", "Jet", "Jolt", "Jiffy", "Jester", "Jist"],
    },

    K: {
      letterID: "10",
      letterName: "K",
      letterImg: k,
      letterAudio: "mp3",
      letterWords: ["Kit", "Kiln", "Kilt", "Krill", "Karma", "Kenetic", "Knot"],
    },

    L: {
      letterID: "11",
      letterName: "L",
      letterImg: l,
      letterAudio: "mp3",
      letterWords: [
        "Log",
        "Lima",
        "Leg",
        "Laugh",
        "Lime",
        "Laughter",
        "Ladybird",
      ],
    },

    M: {
      letterID: "12",
      letterName: "M",
      letterImg: m,
      letterAudio: "mp3",
      letterWords: ["Mouse", "Moose", "Mumps", "Milk", "Magnet", "Muppet"],
    },

    N: {
      letterID: "13",
      letterName: "N",
      letterImg: n,
      letterAudio: "mp3",
      letterWords: ["Night", "Nifty", "Number", "Nine", "None", "Nimble"],
    },

    O: {
      letterID: "14",
      letterName: "O",
      letterImg: o,
      letterAudio: "mp3",
      letterWords: ["Octopus", "Okay", "Other", "Out", "Off", "Owl"],
    },

    P: {
      letterID: "15",
      letterName: "P",
      letterImg: p,
      letterAudio: "mp3",
      letterWords: ["Pulp", "Play", "Pint", "Port", "Prawn", "Pewter"],
    },

    Q: {
      letterID: "16",
      letterName: "Q",
      letterImg: q,
      letterAudio: "mp3",
      letterWords: [
        "Quarter",
        "Quick",
        "Quack",
        "Quince",
        "Quip",
        "Queen",
        "Quiet",
      ],
    },

    R: {
      letterID: "17",
      letterName: "R",
      letterImg: r,
      letterAudio: "mp3",
      letterWords: ["rabbit", "rain", "ran", "rat", "red", "ring", "rod"],
    },

    S: {
      letterID: "18",
      letterName: "S",
      letterImg: s,
      letterAudio: "mp3",
      letterWords: ["said", "sail", "saw", "say", "sing", "see", "sit"],
    },

    T: {
      letterID: "19",
      letterName: "T",
      letterImg: t,
      letterAudio: "mp3",
      letterWords: [
        "table",
        "tail",
        "teacher",
        "ten",
        "tiger",
        "toy",
        "turtle",
      ],
    },
    U: {
      letterID: "20",
      letterName: "U",
      letterImg: u,
      letterAudio: "mp3",
      letterWords: [
        "umbrella",
        "umpire",
        "under",
        "underline",
        "unhappy",
        "unload",
        "ulcer",
      ],
    },

    V: {
      letterID: "22",
      letterName: "V",
      letterImg: v,
      letterAudio: "mp3",
      letterWords: [
        "van",
        "vase",
        "very",
        "vest",
        "vulture",
        "vine",
        "volcano",
      ],
    },

    W: {
      letterID: "23",
      letterName: "W",
      letterImg: w,
      letterAudio: "mp3",
      letterWords: [
        "walk",
        "water",
        "walrus",
        "whale",
        "when",
        "white",
        "wolf",
      ],
    },

    X: {
      letterID: "24",
      letterName: "X",
      letterImg: x,
      letterAudio: "mp3",
      letterWords: [
        "X-ray",
        "Xenon",
        "Xenial",
        "Xanthan",
        "Xebec",
        "Xenolith",
        "Xenogeny",
      ],
    },

    Y: {
      letterID: "25",
      letterName: "Y",
      letterImg: y,
      letterAudio: "mp3",
      letterWords: ["Yacht", "Yodo", "Yank", "Yard", "Yard", "Yeti", "Yoghurt"],
    },

    Z: {
      letterID: "26",
      letterName: "Z",
      letterImg: z,
      letterAudio: "mp3",
      letterWords: ["Zappy", "Zebra", "Zound", "Zoo", "Zeal", "Zawn", "Zesty"],
    },
  },
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
