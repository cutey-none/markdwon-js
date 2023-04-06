import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({posts: await getPosts()});
};

export default function Posts() {
  // 通过useLoaderData这个hook渲染静态数据，拿到静态数据
  const { posts } = useLoaderData<typeof loader>();
  console.log(posts);
  return (
    <main>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={post.slug}
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
