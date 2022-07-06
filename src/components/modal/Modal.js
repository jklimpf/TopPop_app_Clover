import { Fragment, useContext } from "react";
import classes from "./Modal.module.css";
import reactDom from "react-dom";
import DeezerContext from "../../store/deezer-context";

const Backdrop = function (props) {
  const deezerCtx = useContext(DeezerContext);

  const backdropHandler = function () {
    deezerCtx.toggleModalStatus();
  };

  return <div onClick={backdropHandler} className={classes.backdrop}></div>;
};

const ModalOverlay = function (props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = function (props) {
  return (
    <Fragment>
      {reactDom.createPortal(
        <Backdrop onClick={props.onClick}></Backdrop>,
        document.getElementById("overlay")
      )}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default Modal;
