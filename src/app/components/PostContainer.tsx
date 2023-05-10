import Post from "@/shared/interfaces/post.interface";
import { PostBody, PostDivider, PostStyled, PostTitle, TrashIconWrapper } from "./UserPosts.styled";
import { Reorder } from 'framer-motion';
import Image from "next/image";
import TrashIcon from '@/shared/assets/trash.svg';

type PostProps = {
    post: Post;
    index: number;
    onDelete: (postId: number) => void;
};

const PostContainer = ({ post, onDelete, index }: PostProps) => {

    return (
        <Reorder.Item
            transition={{ delay: 0.1 * index, ease: "easeOut" }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            value={post}
            id={post.id.toString()}
        >
            <PostStyled >
                <PostTitle>{post.title}</PostTitle>
                <PostBody>{post.body}</PostBody>
                <TrashIconWrapper onClick={() => onDelete(post.id)}>
                    <Image src={TrashIcon} alt="Edit Icon" />
                </TrashIconWrapper>
            </PostStyled>
            <PostDivider />
        </Reorder.Item>
    );
};

export default PostContainer;