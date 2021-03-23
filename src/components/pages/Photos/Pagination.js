import styled from "styled-components";

const PaginationBar = styled.div`
  position: absolute;
  left: 47%;
`;

const PaginationLink = styled.a`
  background-color: #333;
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 8px 16px;
  border: 2px solid #ad6242;

  :hover {
    color: #ad6242;
  }
`;

export { PaginationBar, PaginationLink };
