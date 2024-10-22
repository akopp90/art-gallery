import GlobalStyle from "../styles";
import { useState, useEffect } from "react";
import useSWR from "swr";
import Layout from "./layout";

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
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  useEffect(() => {
    if (data) {
      const initialInfo = data.map((piece) => ({
        slug: piece.slug,
        isFavorite: false,
      }));
      setArtPiecesInfo(initialInfo);
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // Function to handle toggle
  const handleArtPiecesInfo = (slug) => {
    setArtPiecesInfo((prevInfo) => {
      const newInfo = prevInfo.map((piece) =>
        piece.slug === slug
          ? { ...piece, isFavorite: !piece.isFavorite }
          : piece
      );
      console.log("Updated artPiecesInfo:", newInfo);
      return newInfo;
    });
  };

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          pieces={data}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleArtPiecesInfo} // Pass onToggleFavorite down
        />
      </Layout>
    </>
  );
}
