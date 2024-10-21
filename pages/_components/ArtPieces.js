import Image from "next/image";
import React from "react";

function ArtPieces({ pieces }) {
  return (
    <main>
      <h1>ArtPieces</h1>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <Image
              src={piece.imageSource}
              width={piece.dimensions.width}
              height={piece.dimensions.height}
              alt={piece.name}
            />
            {piece.name}
            {piece.artist}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ArtPieces;

// {
//   "slug": "orange-red-and-green",
//   "artist": "Steve Johnson",
//   "name": "Orange Red and Green Abstract Painting",
//   "imageSource": "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
//   "year": "2018",
//   "genre": "Abstract Painting",
//   "colors": [
//     "#0f5855",
//     "#e6ba15",
//     "#b42011",
//     "#cec4c6",
//     "#d5561f"
//   ],
//   "dimensions": {
//     "height": 2432,
//     "width": 1920,
//     "type": "jpg"
//   }
// },