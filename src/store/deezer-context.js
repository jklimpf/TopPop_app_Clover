import React from "react";

const DeezerContext = React.createContext({
  modalIsActive: false,
  songDetails: null,
  toggleModalStatus: () => {},
  getSongDetails: (songDetails) => {},
});

export default DeezerContext;
