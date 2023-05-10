import styled from "styled-components";

export const UserGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    max-width: 1100px;
    width: 100%;
    margin-top: 20px;
`;

export const UserCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: none;
    padding: 20px;
    border-radius: 3px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
        cursor: pointer;
    }
`;

export const UserAvatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

export const UserName = styled.h3`
    font-size: 16px;
    color: #333;
    margin-bottom: 1em;
`;

export const UserEmail = styled.p`
    font-size: 14px;
    color: #333;
`;


export const DivFlex = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: none;
    padding: 20px;
    border-radius: 3px;

    h3 {
        font-size: 20px;
        margin-bottom: 5px;
        color: #333;
        margin-bottom: 1em;
    }

    p {
        font-size: 16px;
        color: #333;
    }
`;

export const UserDetailsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 20px;
    transition: background-color 0.3s;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.03);
        border-radius: 3px;
    }
`;

export const PencilIconWrapper = styled.div`
    position: absolute;
    top: 30%;
    right: -30px;
    margin-left: 10px;
    opacity: 0.1;
    transition: opacity 0.3s;

    img {
        width: 20px;
        height: 20px;
        }


    ${UserDetailsContainer}:hover & {
        opacity: 1;
    }
`;
