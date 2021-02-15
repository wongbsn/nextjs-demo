import { useRef } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Open Sans', sans-serif;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.8rem;
  }

  * {
    box-sizing: border-box;
  }

  p {
    line-height: 1.6;
  }
`;

export default function App({ Component, pageProps }) {
  const queryClientRef = useRef();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
