import { PostContainer } from "@/styles/component-styles";
import Link from "next/link";

function Post({ id, title, content, author, date }: any) {
  return (
    <PostContainer>
      <h1>
        <Link href={{ pathname: "/post/[id]", query: { id } }}>{title}</Link>
      </h1>
      <h3>Date Posted - {date}</h3>
      <h3>Posted By - {author}</h3>
      <p>{content}</p>
    </PostContainer>
  );
}

export default Post;
