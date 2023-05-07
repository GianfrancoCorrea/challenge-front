import styled from "styled-components";

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    background-color: #f5f5f5;
    padding: 20px;
    transition: transform 1s ease-in-out;
    transform: ${({ $isSidebarOpen }) => ($isSidebarOpen ? 'translateX(0)' : 'translateX(100%)')};
`;

const SidebarTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
`;

export { SidebarContainer, SidebarTitle };
