import styled from "styled-components";

export const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 500px;
    height: 100vh;
    padding: 20px;
    z-index: 10;
    background-color: #fafafa;
    box-sizing: border-box;
    overflow: auto;
    border-left: 1px solid #ccc;
    transition: transform 0.2s ease-in-out;
    transform: ${({ $isSidebarOpen }) => ($isSidebarOpen ? 'translateX(0)' : 'translateX(100%)')};
`;

export const SidebarTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    background-color: transparent;
    color: #333;
    border: none;
    cursor: pointer;

    &:hover {
        color: #999;
    }

    &:focus {
        outline: none;
    }
`;
