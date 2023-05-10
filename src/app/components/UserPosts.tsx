import { useEffect, useState } from "react";
import Post from "@/shared/interfaces/post.interface";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { fetchPosts } from "../redux/postsSlice";
import { PostBody, PostContainer, PostDivider, PostStyled, PostTitle, TrashIconWrapper } from "./UserPosts.styled";
import { motion } from 'framer-motion';
import Image from "next/image";
import TrashIcon from '@/shared/assets/trash.svg';

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

    const handleDeletePost = (postId: number) => {
        setPosts(posts.filter((post) => post.id !== postId));
        // TODO: delete slice | avoid animation run every render (usePrevious, useAnimate)
        // dispatch(deletePost(postId));

    };

    return (
        <PostContainer>
            {loading && <p>Loading...</p>}
            <PostDivider />
            {posts.map((post, index) => (
                <>
                    <PostStyled key={post.id}
                        as={motion.div}
                        transition={{ delay: 0.1 * index, ease: "easeOut" }}
                        initial={{ y: "-50px", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <PostTitle>{post.title}</PostTitle>
                        <PostBody>{post.body}</PostBody>
                        <TrashIconWrapper onClick={() => handleDeletePost(post.id)}>
                            <Image src={TrashIcon} alt="Edit Icon" />
                        </TrashIconWrapper>
                    </PostStyled>
                    <PostDivider />
                </>
            ))}
        </PostContainer>
    );
};

export default UserPosts;