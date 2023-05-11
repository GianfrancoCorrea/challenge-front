import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import User from '@/shared/interfaces/user.interface';
import {
    ButtonsContainer, CancelButton, DivRow, EditForm,
    FormGroup, FormInput, UpdateButton
} from './UserEditForm.styled';
import Loading from "@/shared/components/Loading";

type InputChangeEvent = ChangeEvent<HTMLInputElement>;
interface UserEditProps {
    user: User;
    updateUser: (user: User) => void;
    onClose: () => void;
}

const defaultInputData = (user: User | null) => {
    return ({
        first_name: user?.first_name || '',
        last_name: user?.last_name || '',
        email: user?.email || '',
    });
};

const UserEditForm = ({ user, updateUser, onClose }: UserEditProps) => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [userInputData, setUserInputData] = useState(defaultInputData(selectedUser));


    // Update the user input data when the user changes the input value
    const handleUserDataChange = (e: InputChangeEvent) => {
        const { name, value } = e.target;
        setUserInputData({
            ...userInputData,
            [name]: value,
        });
        setIsLoading(false);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const userUpdated: User = {
            id: user.id,
            email: userInputData.email,
            first_name: userInputData.first_name,
            last_name: userInputData.last_name,
            avatar: user.avatar
        };
        setIsLoading(true);
        return updateUser(userUpdated);
    };

    const handleClosing = () => {
        setUserInputData(defaultInputData(selectedUser));
        onClose();
    };

    // Update the selected user when the user prop changes
    useEffect(() => {
        setSelectedUser(user);
        setUserInputData({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
        });
    }, [user]);

    return (
        <EditForm onSubmit={handleSubmit}>
            <DivRow>
                <FormGroup>
                    <FormInput
                        type="text"
                        value={userInputData.first_name}
                        name="first_name"
                        onChange={(e: InputChangeEvent) => handleUserDataChange(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <FormInput
                        type="text"
                        value={userInputData.last_name}
                        name="last_name"
                        onChange={(e: InputChangeEvent) => handleUserDataChange(e)}
                    />
                </FormGroup>
            </DivRow>
            <FormGroup>
                <FormInput
                    type="email"
                    value={userInputData.email}
                    name="email"
                    onChange={(e: InputChangeEvent) => handleUserDataChange(e)}
                />
            </FormGroup>
            <ButtonsContainer>
                <UpdateButton type="submit">Update</UpdateButton>
                <CancelButton type="button" onClick={() => handleClosing()}>Cancel</CancelButton>
            </ButtonsContainer>
            {isLoading && <Loading />}
        </EditForm>
    );
};

export default UserEditForm;
