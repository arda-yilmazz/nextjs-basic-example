import Head from "next/head";

export default function PostDetails({post}) {
    return (
        <>
            <Head>
                <title>Next js Example</title>
            </Head>
            <div className="container">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>

            <style jsx>{`
                h3 {
                    font-size: 26px;
                }
            `}</style>
        </>
    )
}

export async function getServerSideProps({params}) {
const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.url}`)
    const post = await res.json()

    return {
        props: {
            post
        }
    }
}