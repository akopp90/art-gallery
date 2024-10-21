import GlobalStyle from "../styles";
import { useState, useEffect } from "react";
import useSWR from "swr";
import Layout from "./layoutL";

export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";
  const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    return res.json();
  };

  const { data, error, isLoading } = useSWR(url, fetcher);

  const [randomArtPiece, setRandomArtPiece] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      const getRandomArtPiece = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
      };

      setRandomArtPiece(getRandomArtPiece());
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} artPiece={randomArtPiece} pieces={data} />
      </Layout>
    </>
  );
}
