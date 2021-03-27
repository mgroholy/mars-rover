import styled from "styled-components";

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    cursor: pointer;
    float: left;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #333;
    margin-left: 20px;
  }
`;

export const MobileText = styled.div`
  font-weight: bolder;
  color: #333;
  margin-left: 10px;
`;
