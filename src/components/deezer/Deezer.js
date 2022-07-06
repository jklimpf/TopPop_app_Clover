import { useState, useEffect, Fragment } from "react";
import DeezerList from "./DeezerList";
import { deezerDataTemp } from "../../temporaryData";
import LoadingSpinner from "../UI/LoadingSpinner";

const Deezer = function () {
  const [deezerData, setDeezerData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async function () {
      setIsLoading(true);
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/api.deezer.com/chart"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      setDeezerData(data.tracks.data);
      setIsLoading(false);
    };

    fetchData().catch((err) => {
      console.log(err.message);
      setDeezerData(deezerDataTemp);
    });
  }, []);

  return (
    <Fragment>
      <DeezerList data={deezerData}>
        {isLoading && <LoadingSpinner></LoadingSpinner>}
      </DeezerList>
    </Fragment>
  );
};

export default Deezer;
