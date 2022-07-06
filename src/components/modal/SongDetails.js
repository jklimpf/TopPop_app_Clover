import DeezerContext from "../../store/deezer-context";
import { useContext } from "react";
import classes from "./SongDetails.module.css";

const SongDetails = function () {
  const deezerCtx = useContext(DeezerContext);

  const { position, duration, artist, title } = deezerCtx.songDetails;

  const minute = Math.floor(duration / 60);
  const restSeconds = duration % 60;

  const closeBtnHandler = function () {
    deezerCtx.toggleModalStatus();
  };

  return (
    <div>
      <button onClick={closeBtnHandler}>Close</button>
      <div className={classes.detailsDiv}>
        <p>
          Position: <span>{position}</span>
        </p>
        <p>
          Title: <span>{title}</span>
        </p>
        <p>
          Artist: <span>{artist.name}</span>
        </p>
        <p>
          Duration:
          <span>
            {minute.toString().padStart(2, "0")}:
            {restSeconds.toString().padStart(2, "0")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SongDetails;
