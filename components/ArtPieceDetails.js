import Image from "next/image";
import { useRouter } from "next/router";
import BookmarkButton from "./BookmarkButon";

const ArtPieceDetails = ({ piece, artPiecesInfo, onToggleFavorite }) => {
  const router = useRouter();

  const isFavorite =
    artPiecesInfo && artPiecesInfo.length > 0
      ? artPiecesInfo.find((info) => info.slug === piece.slug)?.isFavorite ||
        false
      : false;

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
        <BookmarkButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorit} // Pass the slug
        />
      </main>
    </>
  );
};

export default ArtPieceDetails;
