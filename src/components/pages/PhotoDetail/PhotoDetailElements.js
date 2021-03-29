import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 800px;

  @media screen and (max-width: 800px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }

  @media screen and (max-width: 576px) {
    width: 90%;
  }
`;

export const Card = styled.div`
  display: grid;
  margin-top: 61px; // Navbar height + 10px (upper frame)
`;

export const Description = styled.div`
  padding: 10px 15px 15px 15px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ad6242;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background: #ad6242;

  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: calc(100vh - 71px); // Navbar height + 20px (bottom frame)
  border: 10px #333 solid;
  margin: auto;

  @media screen and (max-width: 768px) {
    border: 5px #333 solid;
  }
`;

export const Button = styled.button`
  background-color: #333;
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 8px 16px;
  margin-top: 25px;

  :hover {
    color: #ad6242;
  }
`;

export const FavoriteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin: 10px 0;
    padding: 5px 0;
    border-top: 2px black solid;
    border-bottom: 2px black solid;
  }
`;

export const FavoriteIcon = styled.span`
  margin-right: 10px;
`;

export const RoverDetail = styled.div`
  display: inline-block;
`;

export const DateDetail = styled.div`
  display: inline-block;
`;
