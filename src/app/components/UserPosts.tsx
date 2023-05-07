import { useEffect, useState } from "react";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type UserPostsProps = {
    userId: number;
};

const UserPosts = ({ userId }: UserPostsProps) => {
    const [posts, setPosts] = useState<Post[]>([]); // Specify the type for `posts`
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [userId]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default UserPosts;