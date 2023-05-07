import styled from "styled-components";

const EditForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const FormLabel = styled.label`
    font-size: 16px;
    margin-bottom: 5px;
    color: #333;
`;

const FormInput = styled.input`
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
`;

const UpdateButton = styled.button`
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

export { EditForm, FormGroup, FormLabel, FormInput, UpdateButton };