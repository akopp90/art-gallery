import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

const PostPage = ({ pieces }) => {
  const router = useRouter();
  const { slug } = router.query;

  const filter = pieces.find((piece) => slug === piece.slug);

  return <ArtPieceDetails piece={filter} />;
};

export default PostPage;
