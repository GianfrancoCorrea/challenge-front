import Posts from "@/shared/interfaces/post.interface";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { fetchPosts } from "../redux/postsSlice";
import { PostBody, PostStyled, PostTitle } from "./UserPosts.styled";

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
    const [posts, setPosts] = useState<Post[]>([]);
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
                <PostStyled key={post.id}>
                    <PostTitle>{post.title}</PostTitle>
                    <PostBody>{post.body}</PostBody>    
                </PostStyled>
            ))}
        </div>
    );
};

export default UserPosts;