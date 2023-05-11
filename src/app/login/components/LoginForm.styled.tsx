import styled from "styled-components";

export const Form = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 400px;
    margin: 20px auto;
    padding: 30px 50px;
    background: #fafafa;
    font-size: 14px;
    border-radius: 3px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-bottom: 3px solid #ccc;
    color: #333;

    h1 {
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 30px;
    }

    input {
        width: 100%;
        margin-bottom: 40px;
        padding: 10px 15px;
        border-bottom: 3px solid transparent;
        border-radius: 3px;
        box-sizing: border-box;
        font-size: 14px;
        color: #333;
        transition: border-bottom 0.2s ease-in-out;
    }

    input:focus {
        border-bottom: 3px solid #ccc;
    }
`;

export const ErrorMessage = styled.p`
    color: #ff3333;
    margin: 0 0 10px 0;
    padding: 0;
    font-size: 90%;
`;

export const ForgotPassword = styled.p`
    margin: 10px 0 0 0;
    padding: 0;
    font-size: 90%;
    color: #999;
    text-align: center;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: #333;
    }
`;
