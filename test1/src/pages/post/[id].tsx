import Post from "@/components/Post";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

function PagePerPost() {
  const router = useRouter();

  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log(router.query.id);
    const postGetter = async (id: string | string[] | undefined) => {
      const postResponse = await fetch(`http://localhost:3000/posts/${id}`);
      const postData = await postResponse.json();
      setAuthor(postData?.author);
      setContent(postData?.content);
      setDate(postData?.date);
      setTitle(postData?.title);
      return postData;
    };

    postGetter(router.query.id);
  }, [author, content, date, title]);
  return (
    <>
      <Head>
        <title>Post {router.query.id}</title>
        <meta
          name="description"
          content={`This is mock post ${router.query.id} page`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Post author={author} title={title} date={date} content={content} />
    </>
  );
}

export default PagePerPost;
