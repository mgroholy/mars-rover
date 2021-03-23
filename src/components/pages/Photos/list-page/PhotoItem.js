import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  margin-bottom: 30px;
  margin-left: 30px;
  display: inline-block;
`;

const PhotoItem = ({ id, image }) => {
  return (
    <Card>
      <Link to={`/photo/${id}`}>
        <img
          alt="mars"
          src={image}
          width="120px"
          style={{ borderRadius: "10px" }}
        />
      </Link>
    </Card>
  );
};

export default PhotoItem;
