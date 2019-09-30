import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const User = ({ name, surname }) => {
  return (
    <Wrapper isColored={!!surname}>
      <Label>{name}</Label>
      {!!surname && <Label>{surname}</Label>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  ${({ isColored }) => (isColored ? "color: red;" : null)}
`;

const Label = styled.p`
  margin: 0;
`;

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string
};

export { User };
