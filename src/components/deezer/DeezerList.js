import { useContext, useState } from "react";
import DeezerContext from "../../store/deezer-context";
import classes from "./DeezerList.module.css";
import DeezerSong from "./DeezerSong";

const sortSongs = (songs, shape) => {
  return songs.sort((songA, songB) => {
    if (shape === "shorter") {
      return songA.duration > songB.duration ? 1 : -1;
    }
    if (shape === "longer") {
      return songA.duration < songB.duration ? 1 : -1;
    } else {
      return songA.position > songB.position ? 1 : -1;
    }
  });
};

const DeezerList = function (props) {
  const [sortedShape, setSortedShape] = useState(null);
  const deezerCtx = useContext(DeezerContext);

  const songClickHandler = function (e) {
    const id = e.target.id;

    const songDetails = props.data.find((el) => el.id === Number(id));

    deezerCtx.getSongDetails(songDetails);
    deezerCtx.toggleModalStatus();
  };

  const sortHandler = function (e) {
    setSortedShape(e.target.value);
  };

  const sortedSongs = sortSongs(props.data, sortedShape);

  return (
    <div className={classes.songs}>
      <h1 className={classes.title}>Top Pop</h1>
      <h2 className={classes.description}>Top 10 Deezer songs</h2>
      <div className={classes.sortDiv}>
        <select className={classes.sort} onChange={sortHandler}>
          <option value="nothing">Position</option>
          <option value="longer">Longer duration</option>
          <option value="shorter">Shorter duration</option>
        </select>
      </div>
      <ul>
        {sortedSongs.map((el) => {
          return (
            <DeezerSong
              key={el.id}
              id={el.id}
              title={el.title}
              onClick={songClickHandler}
            ></DeezerSong>
          );
        })}
      </ul>
    </div>
  );
};

export default DeezerList;
