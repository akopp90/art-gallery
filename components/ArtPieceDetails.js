import Image from "next/image";
import { useRouter } from "next/router";

const ArtPieceDetails = ({ piece }) => {
  const router = useRouter();

  return (
    <>
      <main>
        <h1>ArtPieces</h1>
        <ul>
          <li key={piece.slug}>
            <Image
              src={piece.imageSource}
              width={piece.dimensions.width}
              height={piece.dimensions.height}
              alt={piece.name}
            />
            {piece.name}
            {piece.artist}
            {piece.year}
            {piece.genre}
          </li>
        </ul>
        <button type="button" onClick={() => router.push("/art-pieces")}>
          Back
        </button>
      </main>
    </>
  );
};

export default ArtPieceDetails;
