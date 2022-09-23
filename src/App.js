import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./components/Form";
import PicCard from "./components/PicCard";
import { setPicturesData } from "./feature/pictures.slice";

const App = () => {
  const dispatch = useDispatch();
  const picsData = useSelector((state) => state.pictures.pictures);

  useEffect(() => {
    axios
      .get("http://localhost:5000/pictures")
      .then((res) => dispatch(setPicturesData(res.data)));
  }, []);

  return (
    <>
      <h1>NFT Gallery</h1>
      <Form />
      <div className="cards-container">
        {picsData?.map((pic, index) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default App;
