import Posts from "@/shared/interfaces/post.interface";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { fetchPosts } from "../redux/postsSlice";

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
    const dispatch = useAppDispatch();
    const postsData = useAppSelector((state: RootState) => state.posts.data?.[userId] ?? null) as Posts[] | null;

    useEffect(() => {
        if (postsData) {
            setPosts(postsData);
            setLoading(false);
        }
    }, [postsData]);

    useEffect(() => {
        if (!postsData) {
            dispatch(fetchPosts(userId));
        }
    }, [userId, dispatch, postsData]);

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