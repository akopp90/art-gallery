import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import { useState, useEffect } from "react";

export default function HomePage() {
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

  // State für das zufällige Kunstwerk
  const [randomArtPiece, setRandomArtPiece] = useState(null);

  // Zufälliges Kunstwerk auswählen, sobald Daten geladen sind
  useEffect(() => {
    if (data && data.length > 0) {
      const getRandomArtPiece = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
      };

      setRandomArtPiece(getRandomArtPiece());
    }
  }, [data]); // Diese Funktion wird nur ausgeführt, wenn 'data' sich ändert

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      {randomArtPiece && <Spotlight artPiece={randomArtPiece} />}
      <ArtPieces pieces={data} />
    </>
  );
}

/* import useSWR, { SWRConfig } from "swr";
import ArtPieces from "../components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function HomePage() {
  const url = "https://example-apis.vercel.app/api/art";
  const fetcher = async (url) => {
    const res = await fetch(url); // If the status code is not in the range 200-299,  // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data."); // Attach extra info to the error object.
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };

  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  async function getRandomArtPiece() {
    const randomIndex = Math.floor(Math.random() * data.length);

    const randomArtPiece = data[randomIndex];
    return randomArtPiece;
  }

  // Um das zufällige Kunstwerk zu bekommen, verwende 'await' in einer async-Funktion:
  async function displayRandomArtPiece() {
    const randomArtPieceFetch = await getRandomArtPiece(); // Warten, bis das Promise aufgelöst ist

    return randomArtPieceFetch;
  }

  // Aufrufen der async-Funktion
  console.log(displayRandomArtPiece());

  return (
    <>
      <Spotlight />
      <ArtPieces pieces={data} />;
    </>
  );
}
 */
