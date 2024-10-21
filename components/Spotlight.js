import Image from "next/image";

export default function Spotlight({ artPiece }) {
  return (
    <>
      <h1>Random</h1>
      <p>{artPiece.artist}</p>
      <Image
        src={artPiece.imageSource}
        width={artPiece.dimensions.width}
        height={artPiece.dimensions.height}
      />
      <hr />
    </>
  );
}
