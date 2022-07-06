import classes from "./DeezerSong.module.css";

const DeezerSong = function (props) {
  return (
    <li className={classes.songList}>
      <div className={classes.song} id={props.id} onClick={props.onClick}>
        {props.title}
      </div>
    </li>
  );
};

export default DeezerSong;
