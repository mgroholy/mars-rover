import styled from "styled-components";

const Alert = styled.div`
  background: lightgoldenrodyellow;
  text-align: center;
  padding: 10px;
  margin-bottom: 40px;
`;

const Warning = ({ incorrectDateFormat }) => {
  return (
    <Alert>
      <p>
        {incorrectDateFormat
          ? "Please enter a date in the format 'yyyy-mm-dd'."
          : "No (more) photos were found for this date."}
      </p>
    </Alert>
  );
};

export default Warning;
