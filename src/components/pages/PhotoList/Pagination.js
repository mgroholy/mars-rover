import styled from "styled-components";

const PaginationBar = styled.div`
  margin-top: 25px;
`;

const PaginationLink = styled.a`
  background-color: #333;
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 8px 16px;
  border: 3px solid #ad6242;

  :hover {
    color: #ad6242;
  }

  :last-child {
    border-left: 0;
  }
`;

const Pagination = (props) => {
  return (
    <PaginationBar>
      <PaginationLink href="/" onClick={props.onPreviousClick}>
        &lt;
      </PaginationLink>
      <PaginationLink href="/" onClick={props.onNextClick}>
        &gt;
      </PaginationLink>
    </PaginationBar>
  );
};

export default Pagination;
