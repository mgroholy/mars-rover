import React from "react";

const PhotoDetail = (props) => {
  const { id } = props.match.params;
  const { image, rover, date } = props.location.state;

  return (
    <div style={{ marginTop: "100px" }}>
      <div>{id}</div>
      <div>{image}</div>
      <div>{rover}</div>
      <div>{date}</div>
    </div>
  );
};

export default PhotoDetail;
