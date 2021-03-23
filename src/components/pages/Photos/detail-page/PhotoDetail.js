import React from "react";
import styled from "styled-components";

const Card = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
  width: 800px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background: #ad6242;
  border-radius: 5px;
`;

const Description = styled.div`
  padding: 10px 15px 15px 15px;
  font-weight: bold;
`;

const Image = styled.img`
  border-radius: 5px 5px 0 0;
  width: 800px;
`;

const PhotoDetail = (props) => {
  const { image, rover, date } = props.location.state;

  return (
    <Card>
      <Image alt="mars-quality" src={image} />
      <Description>
        <div style={{ display: "inline-block", marginRight: "420px" }}>
          Rover: {rover}
        </div>
        <div style={{ display: "inline-block" }}>Earth date: {date}</div>
      </Description>
    </Card>
  );
};

export default PhotoDetail;
