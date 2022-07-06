import { useState, useEffect } from "react";
import DeezerList from "./DeezerList";
import { deezerDataTemp } from "../../temporaryData";

const Deezer = function () {
  const [deezerData, setDeezerData] = useState([]);
  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/api.deezer.com/chart"
      );

      console.log(response);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      setDeezerData(data.tracks.data);
    };

    fetchData().catch((err) => {
      console.log(err.message);
      setDeezerData(deezerDataTemp);
    });
  }, []);

  return <DeezerList data={deezerData}></DeezerList>;
};

export default Deezer;
