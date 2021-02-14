import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import styled, { css } from "styled-components";
import { useInView } from "react-intersection-observer";

const ImageWrapper = styled.div`
  position: relative;
  line-height: 0;
  transition: filter 0.2s ease-out;

  > div {
    opacity: 0;
  }

  img {
    transform: translateZ(0);
  }

  > div:first-child {
    position: relative;
    transform: translate(-20%, 10%);
    transition: all 0.5s ease-out 0.3s;

    ${({ visible }) =>
      visible &&
      css`
        opacity: 1;
        transform: translate(0%, 0%);
      `};

    img {
      clip-path: polygon(0 0, 100% 0%, 100% 30%, 0 71%);
    }
  }

  > div:last-child {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(20%, -10%);
    transition: all 0.5s ease-out 0.3s;

    ${({ visible }) =>
      visible &&
      css`
        opacity: 1;
        transform: translate(0%, 0%);
      `};

    img {
      clip-path: polygon(0 71%, 100% 29%, 100% 100%, 0 100%);
    }
  }
`;

const Photo = ({ id, ...props }) => {
  const [visible, setVisible] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (!visible && inView) {
      setVisible(true);
    }
  }, [visible, inView]);

  return (
    <ImageWrapper ref={ref} visible={visible}>
      <Image alt="" {...props} />
      <Image alt="" {...props} />
    </ImageWrapper>
  );
};

export default Photo;
