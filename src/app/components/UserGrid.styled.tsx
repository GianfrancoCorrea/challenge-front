import styled from "styled-components";

const UserGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    max-width: 1100px;
    width: 100%;
    margin-top: 20px;
`;

const UserCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: none;
    padding: 20px;
    border-radius: 8px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
        cursor: pointer;
    }
`;

const UserAvatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

const UserName = styled.h3`
    font-size: 18px;
    margin-bottom: 5px;
    color: #333;
    margin-bottom: 1em;
`;

const UserEmail = styled.p`
    font-size: 14px;
    color: #fafafa
`;

export { UserGridContainer, UserCard, UserAvatar, UserName, UserEmail };