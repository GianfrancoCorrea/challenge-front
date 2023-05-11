import Post from "@/shared/interfaces/post.interface";
import { PostBody, PostDivider, PostStyled, PostTitle, TrashIconWrapper } from "./UserPosts.styled";
import { Reorder } from 'framer-motion';
import Image from "next/image";
import TrashIcon from '@/shared/assets/trash.svg';
import Loading from "@/shared/components/Loading";

type PostProps = {
    post: Post;
    index: number;
    loading: boolean;
    onDelete: (postId: number) => void;
};

const PostContainer = ({ post, onDelete, index, loading }: PostProps) => {

    return (
        <Reorder.Item
            transition={{ delay: 0.1 * index, ease: "easeOut" }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            dragElastic={0.1}
            dragDirectionLock={true}
            value={post}
            id={post.id.toString()}
        >
            <PostStyled >
                <PostTitle>{post.title}</PostTitle>
                <PostBody>{post.body}</PostBody>
                <TrashIconWrapper onClick={() => onDelete(post.id)}>
                    <Image src={TrashIcon} alt="Edit Icon" />
                </TrashIconWrapper>
                {loading && <Loading />}
            </PostStyled>
            <PostDivider />
        </Reorder.Item>
    );
};

export default PostContainer;