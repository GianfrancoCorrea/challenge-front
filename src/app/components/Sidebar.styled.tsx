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

export { SidebarContainer, SidebarTitle, EditForm, FormGroup, FormLabel, FormInput, UpdateButton };
