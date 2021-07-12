import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts, theme }) {
  return (
    <div className={"posts"+theme}>
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}