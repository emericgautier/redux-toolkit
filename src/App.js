import React from "react";
import Form from "./components/Form";
import PicCard from "./components/PicCard";

const App = () => {
  return (
    <>
      <h1>NFT Gallery</h1>
      <Form />
      <div className="card-container">
        <PicCard />
      </div>
    </>
  );
};

export default App;
