import styled from "styled-components";

export const FilterBar = styled.div`
  background-color: lightgray;
  height: 40px;
  width: 800px;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 10px;

  @media screen and (max-width: 800px) {
    width: 90vw;
    margin-top: 80px;
  }
`;

export const FilterRover = styled.div`
  padding: 10px;
  display: flex;
  float: left;
  font-weight: bolder;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const FilterDate = styled.div`
  padding: 7.5px;
  display: flex;
  float: right;
`;

export const Input = styled.input`
  border-radius: 5px;
  height: 25px;

  @media screen and (max-width: 800px) {
    width: 125px;
  }
`;

export const Image = styled.img`
  height: 25px;
  margin-left: 5px;
  cursor: pointer;
`;
