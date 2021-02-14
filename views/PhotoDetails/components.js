import styled from "styled-components";

export const Main = styled.main`
  min-height: 100vh;
  background: #1d1f21;

  h1 {
    font-size: 3.5rem;
    margin-top: 0;
    margin-bottom: 0;
  }

  a {
    color: #759a9a;
  }
`;

export const Section = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

Section.Content = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  color: black;
  width: 100%;
`;

export const ImageItem = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  min-height: 70vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
  box-shadow: 3px 3px 5px #222;

  @media screen and (min-width: 760px) {
    flex-direction: row;
  }
`;

ImageItem.ImageContainer = styled.div`
  position: relative;
  flex: 1;
  min-height: 300px;
  background-color: #222;
`;

ImageItem.TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 4rem;

  a {
    align-self: flex-end;
    margin-top: auto;
  }
`;

ImageItem.Label = styled.div`
  font-style: italic;
  font-size: 1.4rem;
  margin-top: 0.5rem;
`;
