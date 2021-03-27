import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  margin: 15px;
  display: inline-block;

  @media screen and (max-width: 576px) {
    margin: 10px;
  }
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

  @media screen and (max-width: 576px) {
    width: 85px;
    max-height: 85px;
    border-radius: 6.5px;
    box-shadow: 3px 3px 20px 4.5px rgba(0, 0, 0, 0.25),
      -3px -3px 20px 4.5px rgba(0, 0, 0, 0.22);
    transition: 0.4s;

    :hover {
      transform: scale(0.9, 0.9);
      box-shadow: 3px 3px 20px 4.5px rgba(0, 0, 0, 0.25),
        -3px -3px 20px 4.5px rgba(0, 0, 0, 0.22);
    }
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
