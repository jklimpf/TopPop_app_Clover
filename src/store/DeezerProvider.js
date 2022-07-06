import { useReducer } from "react";
import DeezerContext from "./deezer-context";

const initialArg = {
  modalIsActive: false,
  songDetails: null,
};

const reducer = function (state, action) {
  if (action.type === "TOGGLE_MODAL") {
    return {
      modalIsActive: !state.modalIsActive,
      songDetails: state.songDetails,
    };
  }

  if (action.type === "ADD_DETAILS") {
    return {
      modalIsActive: state.modalIsActive,
      songDetails: action.songDetails,
    };
  }

  return initialArg;
};

const DeezerProvider = function (props) {
  const [state, dispatch] = useReducer(reducer, initialArg);

  const toggleModalStatusHandler = function () {
    dispatch({ type: "TOGGLE_MODAL" });
  };

  const getSongDetailsHandler = function (songDetails) {
    dispatch({ type: "ADD_DETAILS", songDetails: songDetails });
  };

  const deezerContext = {
    modalIsActive: state.modalIsActive,
    songDetails: state.songDetails,
    toggleModalStatus: toggleModalStatusHandler,
    getSongDetails: getSongDetailsHandler,
  };

  return (
    <DeezerContext.Provider value={deezerContext}>
      {props.children}
    </DeezerContext.Provider>
  );
};

export default DeezerProvider;
