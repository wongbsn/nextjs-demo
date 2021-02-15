import styled from "styled-components";

export const Main = styled.main`
  min-height: 100vh;
  background: #1d1f21;

  h1 {
    font-size: 6rem;
    text-shadow: 4px 4px 10px #000;
    color: white;
    text-align: center;
  }

  h2 {
    font-size: 3.5rem;
  }

  a {
    color: #759a9a;
  }

  strong {
    color: #77ADAA;
  }
`;

export const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 70vh;
`;

Hero.Image = styled.div`
  &,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 0 300px #000000;
  }
`;

Hero.Content = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const Section = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

Section.Content = styled.div`
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  color: white;

  ul {
    padding: 0;
    display: flex;
    list-style-type: none;

    li:not(:first-of-type) {
      padding-left: 1rem;
    }

    li:not(:last-of-type) {
      padding-right: 1rem;
      border-right: 1px solid white;
    }
  }

  @media screen and (min-width: 810px) {
    max-width: 83rem;
  }

  @media screen and (min-width: 1080px) {
    max-width: 110rem;
  }
`;

Section.ImageContent = styled(Section.Content)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  padding-right: 0;

  > * {
    margin: 1rem;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    transition: filter 0.3s ease;

    :hover {
      filter: brightness(60%) saturate(1.5);
    }
  }
`;

export const ImageItem = styled.div`
  position: relative;
  max-width: 1000px;
  height: 100%;
  min-height: 70vh;
  max-height: 70vh;
  display: flex;
  border-radius: 3px;
  background-color: white;
  overflow: hidden;
`;

ImageItem.ImageContainer = styled.div`
  position: relative;
  flex: 1;
`;

ImageItem.TextContainer = styled.div`
  flex: 1;
`;
