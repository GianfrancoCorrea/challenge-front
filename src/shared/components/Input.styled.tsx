import styled from "styled-components";

const Input = styled.input`
    background: #fff;
    border: none;
    border-radius: 3px;
    height: 40px;
    padding: 0 15px;
    font-size: 14px;
    color: #444;
    margin: 0 0 10px;
    width: 100%;
    box-sizing: border-box;
    
    &:focus {
        border: none;
        color: #333;
    }

    &:focus-visible {
        outline: none;
    }

    &::placeholder {
        color: #999;
    }

    border-bottom: ${({ $error }) => ($error ? ' 3px solid #ff33337c !important' : '')};

`;

export default Input;
