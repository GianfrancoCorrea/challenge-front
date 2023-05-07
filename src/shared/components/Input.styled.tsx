import styled from "styled-components";

const Input = styled.input`
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 40px;
    padding: 0 15px;
    font-size: 14px;
    color: #444;
    margin: 0 0 10px;
    width: 100%;
    box-sizing: border-box;
    
    &:focus {
        border: 1px solid #999;
        color: #333;
    }
`;

export default Input;
