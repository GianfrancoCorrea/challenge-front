import styled from "styled-components";

export const Input = styled.input`
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

export const Button = styled.button`
    background: #007bff;
    border: 0;
    padding: 0 15px;
    border-radius: 4px;
    height: 40px;
    font-size: 14px;
    color: #fff;
    margin: 0 0 20px;
    width: 100%;
    box-sizing: border-box;

    &:hover {
        background: #0069d9;
    }
`;

export const Form = styled.form`
    width: 100%;
    width: 300px;
    margin: 20px auto;
    padding: 30px 20px;
    background: #fafafa;
    font-size: 14px;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    color: #333;

    h1 {
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 30px;
    }

    p {
        color: #ff3333;
        margin: 0 0 10px 0;
        padding: 0;
        size: 80%;
    }

`;
