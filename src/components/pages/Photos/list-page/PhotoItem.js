import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  margin-bottom: 30px;
  margin-left: 30px;
  display: inline-block;
`;

const Image = styled.img`
  width: 120px;
  border-radius: 10px;
`;

const PhotoItem = ({ id, image }) => {
  return (
    <Card>
      <Link to={`/photo/${id}`}>
        <Image alt="mars" src={image} />
      </Link>
    </Card>
  );
};

export default PhotoItem;
