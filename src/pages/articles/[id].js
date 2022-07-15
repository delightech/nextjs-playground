import { useRouter } from "next/router";
const Post = () => {
  const router = useRouter();
  // /articles/100 のリクエストの場合、id: 100
  const { id } = router.query;
  return <p>ID: {id}</p>;
};
export default Post;
