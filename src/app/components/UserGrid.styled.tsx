import styled from "styled-components";

const UserGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    width: 100%;
    margin-top: 20px;
`;

const UserCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
`;

const UserAvatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

const UserName = styled.h3`
    font-size: 18px;
    margin-bottom: 5px;
    color: #333;
`;

const UserEmail = styled.p`
    font-size: 14px;
    color: #fafafa
`;

export { UserGridContainer, UserCard, UserAvatar, UserName, UserEmail };