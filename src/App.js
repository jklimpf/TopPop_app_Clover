import Deezer from "./components/deezer/Deezer";
import Modal from "./components/modal/Modal";
import DeezerContext from "./store/deezer-context";
import { Fragment, useContext } from "react";
import SongDetails from "./components/modal/SongDetails";

function App() {
  const deezerCtx = useContext(DeezerContext);

  return (
    <Fragment>
      {deezerCtx.modalIsActive && (
        <Modal>
          <SongDetails></SongDetails>
        </Modal>
      )}
      <Deezer></Deezer>
    </Fragment>
  );
}

export default App;
