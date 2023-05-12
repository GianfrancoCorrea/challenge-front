import styled from "styled-components";

export const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 20px;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
`;

export const PostStyled = styled.div`
    position: relative;
    padding: 10px 50px;
    margin-bottom: 10px;
    background-color: #fafafa;

`;

export const PostTitle = styled.h3`
    font-size: 14px;
    margin-bottom: 5px;
    color: #333;
    margin-bottom: 1em;
`;

export const PostBody = styled.p`
    font-size: 14px;
    color: #333;
`;

export const PostDivider = styled.hr`
    margin: 10px 0;
    padding: 0 50%;
    opacity: 0.2;
`;

export const TrashIconWrapper = styled.div`
    position: absolute;
    top: 40%;
    right: 10px;
    margin-left: 10px;
    opacity: 0.1;
    transition: opacity 0.3s;
    cursor: pointer;

    img {
        width: 20px;
        height: 20px;
        }

    ${PostStyled}:hover & {
        opacity: 1;
    }
`;
