import React from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};

  &:hover {
    background: ${palette.gray[6]};
  }

  ${(
    props // props로 fullWidth가 들어오면 true가 되면서 실행
  ) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(
    props // props로 green이 들어오면 true가 되면서 실행
  ) =>
    props.green &&
    css`
      background: ${palette.green[5]};
      &:hover {
        background: ${palette.green[4]};
      }
    `}
`;
