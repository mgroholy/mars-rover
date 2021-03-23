import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 25px;
  width: 800px;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background: #ad6242;
  border-radius: 5px;
  margin-bottom: 25px;
`;

const Description = styled.div`
  padding: 10px 15px 15px 15px;
  font-weight: bold;
`;

const Image = styled.img`
  border-radius: 5px 5px 0 0;
  width: 800px;
`;

const Button = styled.button`
  background-color: #333;
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 8px 16px;

  :hover {
    color: #ad6242;
  }
`;

const PhotoDetail = (props) => {
  const { image, rover, date } = props.location.state;

  return (
    <Container>
      <Card>
        <Image alt="mars-quality" src={image} />
        <Description>
          <div style={{ display: "inline-block", marginRight: "420px" }}>
            Rover: {rover}
          </div>
          <div style={{ display: "inline-block" }}>Earth date: {date}</div>
        </Description>
      </Card>
      <Button onClick={useHistory().goBack}>&lt; Go back</Button>
    </Container>
  );
};

export default PhotoDetail;
