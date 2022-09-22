import React from "react";

const PicCard = ({ pic }) => {
  return (
    <div className="pic-card">
      <img src={pic.photo} alt={"photo de" + pic.artist} />
    </div>
  );
};

export default PicCard;
