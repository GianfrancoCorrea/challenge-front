import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const MenuButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;

    a {
        text-decoration: none;
        color: #333;
        line-height: 20px;
    }

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.02);
    }

    ${({ $isSelected }) => $isSelected && `
        background-color: rgba(0, 0, 0, 0.03);
        border-bottom: 2px solid #ccc;
    `}
`;

export const VerticalLine = styled.div`
    border-left: 1px solid #ccc;
    height: 20px;
    margin: 0 10px;

    @media (max-width: 768px) {
        display: none;
    }
`;
