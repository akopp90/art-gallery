import Image from "next/image";
import Link from "next/link";
import React from "react";

function ArtPiecePreview({ piece }) {
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
      <button /* isBookmark={isBookmark} */></button>
    </>
  );
}

export default ArtPiecePreview;
