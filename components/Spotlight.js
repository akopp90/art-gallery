import Image from "next/image";
import Link from "next/link";

export default function Spotlight({ artPiece }) {
  return (
    <>
      <h1>Random</h1>
      <p>{artPiece.artist}</p>
      <Link href={"/art-pieces/" + artPiece.slug}>
        <Image
          src={artPiece.imageSource}
          width={artPiece.dimensions.width}
          height={artPiece.dimensions.height}
        />
      </Link>
      <hr />
    </>
  );
}
