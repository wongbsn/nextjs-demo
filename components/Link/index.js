import React from "react";
import { default as NextLink } from "next/link";

const Link = ({ children, ...rest }) => {
  return (
    <NextLink {...rest}>
      <a>{children}</a>
    </NextLink>
  );
};

export default Link;
