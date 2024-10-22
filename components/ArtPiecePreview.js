import Image from "next/image";
import Link from "next/link";
import React from "react";
import BookmarkButton from "./BookmarkButon";

function ArtPiecePreview({ piece, artPiecesInfo, onToggleFavorite }) {
  const isFavorite =
    artPiecesInfo && artPiecesInfo.length > 0
      ? artPiecesInfo.find((info) => info.slug === piece.slug)?.isFavorite ||
        false
      : false;

  return (
    <>
      <div>ArtPiecePreview</div>
      <Link href={"/art-pieces/" + piece.slug}>
        <Image
          src={piece.imageSource}
          width={piece.dimensions.width}
          height={piece.dimensions.height}
          alt={piece.name}
        />
      </Link>
      {piece.name}
      {piece.artist}
      <BookmarkButton
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(piece.slug)}
      />
    </>
  );
}

export default ArtPiecePreview;
