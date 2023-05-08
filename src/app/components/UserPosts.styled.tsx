import styled from "styled-components";

const PostStyled = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
`;
const PostTitle = styled.h3`
    font-size: 18px;
    margin-bottom: 5px;
    color: #333;
    margin-bottom: 1em;
`;

const PostBody = styled.p`
    font-size: 14px;
    color: #333;
`;

export { PostStyled, PostTitle, PostBody };
