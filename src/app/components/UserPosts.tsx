import Post from "@/shared/interfaces/post.interface";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { fetchPosts } from "../redux/postsSlice";
import { PostBody, PostContainer, PostDivider, PostStyled, PostTitle } from "./UserPosts.styled";
import { motion } from 'framer-motion';

type UserPostsProps = {
    userId: number;
};

const UserPosts = ({ userId }: UserPostsProps) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useAppDispatch();
    const postsData = useAppSelector((state: RootState) => state.posts.data?.[userId] ?? null) as Post[] | null;

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
        <PostContainer>
            {loading && <p>Loading...</p>}
            <PostDivider />
            {posts.map((post) => (
                <>
                    <PostStyled key={post.id} 
                        as={motion.div}
                        initial={{ y: "-50px", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <PostTitle>{post.title}</PostTitle>
                        <PostBody>{post.body}</PostBody>
                    </PostStyled>
                    <PostDivider />
                </>
            ))}
        </PostContainer>
    );
};

export default UserPosts;