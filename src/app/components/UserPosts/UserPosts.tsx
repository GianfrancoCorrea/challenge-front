import { useEffect, useState } from "react";
import Post from "@/shared/interfaces/post.interface";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchPosts } from "../../redux/postsSlice";
import {  PostWrapper, PostDivider } from "./UserPosts.styled";
import { Reorder, AnimatePresence } from 'framer-motion';
import PostContainer from "./PostContainer";

type UserPostsProps = {
    userId: number;
};

const UserPosts = ({ userId }: UserPostsProps) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDeletingPost, setIsDeletingPost] = useState<number>(0);
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
        setIsDeletingPost(postId);
        setPosts(posts.filter((post) => post.id !== postId));
        // TODO: delete slice | avoid animation run every render (usePrevious, useAnimate)
        // dispatch(deletePost(postId));
    };

    return (
        <PostWrapper>
            {loading && <p>Loading...</p>}
            <PostDivider />
            {posts.map((post, index) => (
                <Reorder.Group
                    axis="y"
                    animate="animate"
                    onReorder={setPosts}
                    values={posts}
                    key={`postId-${post.id}`}
                >
                    <AnimatePresence initial={true}>
                        <PostContainer
                            post={post}
                            key={`postId-${post.id}`}
                            index={index}
                            onDelete={handleDeletePost}
                            loading={isDeletingPost === post.id}
                        />
                    </AnimatePresence>
                </Reorder.Group>
            ))}
        </PostWrapper>
    );
};

export default UserPosts;
