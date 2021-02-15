import React from "react";
import { default as NextLink } from "next/link";
import styled, { css } from "styled-components";

const Anchor = styled.a`
  ${({ disabled }) =>
    disabled &&
    css`
      && {
        color: #95959F;
        pointer-events: none;
      }
    `};
`;

const Link = ({ children, disabled, ...rest }) => {
  return (
    <NextLink {...rest} passHref>
      <Anchor disabled={disabled}>{children}</Anchor>
    </NextLink>
  );
};

export default Link;
