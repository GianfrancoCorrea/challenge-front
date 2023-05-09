import styled from "styled-components";

export const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 500px;
    height: 100vh;
    background-color: #f5f5f5;
    padding: 20px;
    z-index: 10;
    box-sizing: border-box;
    overflow: auto;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
    transition: transform 0.15s ease-in-out;
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
