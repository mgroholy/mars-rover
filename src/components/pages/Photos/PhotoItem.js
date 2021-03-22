import React from "react";
import styled from "styled-components";

const Card = styled.div`
  margin-bottom: 30px;
  margin-left: 30px;
  display: inline-block;
`;

const PhotoItem = ({ id, image }) => {
  return (
    <Card>
      <img
        alt="mars"
        src={image}
        width="200px"
        style={{ borderRadius: "10px" }}
      />
    </Card>
  );
};

export default PhotoItem;
