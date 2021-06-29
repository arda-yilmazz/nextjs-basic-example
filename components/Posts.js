import Link from "next/link";

export default function Posts({ posts }) {
  return (
    <>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <Link href={`/post/${post.id}`}>
              <a className="post-title">{post.title}</a>
            </Link>
            <span className="post-content">{post.body}</span>
          </div>
        ))}
      </div>
    
        <style jsx>{`
            .post {
                margin: 10px 20px;
            }

            .post-title{
                display: block;
                font-size: 26px;
            }
        `}</style>
    </>
  );
}
