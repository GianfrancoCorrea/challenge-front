import styled from "styled-components";
import Input from "@/shared/components/Input.styled";

export const EditForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    width: 70%;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const FormLabel = styled.label`
    font-size: 16px;
    margin-bottom: 5px;
    color: #333;
`;

export const FormInput = styled(Input)`
    border-bottom: 1px solid #ddd;
    border-radius: 0;

    font-size: 16px;
    margin-bottom: 5px;
    color: #333;

    &:focus {
        border-bottom: 2px solid #ddd;
        outline: none;
    }


`;

export const UpdateButton = styled.button`
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
`;

export const CancelButton = styled.button`
    padding: 8px 16px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
`;

export const ButtonsContainer = styled.div`
    /* grid with 70/30 for 2 buttons */
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;
`;


export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 10px;
`;
