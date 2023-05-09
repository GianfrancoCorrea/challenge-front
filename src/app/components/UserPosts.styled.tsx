import styled from "styled-components";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 20px;
    
`;

export const PostStyled = styled.div`
    padding: 10px 50px;
    margin-bottom: 10px;
    transition: background-color 0.3s;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.03);
        border-radius: 3px;
    }
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
