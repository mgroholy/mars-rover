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
  max-height: 120px;
  border-radius: 10px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  transition: 0.4s;

  :hover {
    transform: scale(0.9, 0.9);
    box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
      -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
  }
`;

const PhotoItem = ({ id, image, rover, date }) => {
  return (
    <Card>
      <Link
        to={{
          pathname: `/photo/${id}`,
          state: { id, image, rover, date },
        }}
      >
        <Image alt="mars" src={image} />
      </Link>
    </Card>
  );
};

export default PhotoItem;
