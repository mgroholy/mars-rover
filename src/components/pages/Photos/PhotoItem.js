import React from "react";

const PhotoItem = ({ id, image }) => {
  return (
    <div>
      <img alt="mars" src={image} width="200px" />
    </div>
  );
};

export default PhotoItem;
