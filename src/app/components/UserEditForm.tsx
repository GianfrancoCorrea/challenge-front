import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import User from '@/shared/interfaces/user.interface';
import { EditForm, FormGroup, FormLabel, UpdateButton } from './UserEditForm.styled';
import Input from "@/shared/components/Input.styled";

type InputChangeEvent = ChangeEvent<HTMLInputElement>;
interface UserEditProps {
    user: User;
    updateUser: (user: User) => void;
}

const UserEditForm = ({ user, updateUser }: UserEditProps) => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const [userInputData, setUserInputData] = useState({
        first_name: selectedUser?.first_name || '',
        last_name: selectedUser?.last_name || '',
        email: selectedUser?.email || '',
    });

    // Update the user input data when the user changes the input value
    const handleUserDataChange = (e: InputChangeEvent) => {
        const { name, value } = e.target;
        setUserInputData({
            ...userInputData,
            [name]: value,
        });
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

        return updateUser(userUpdated);
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
            <FormGroup>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    value={userInputData.email}
                    name="email"
                    onChange={(e: InputChangeEvent) => handleUserDataChange(e)}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel>First Name</FormLabel>
                <Input
                    type="text"
                    value={userInputData.first_name}
                    name="first_name"
                    onChange={(e: InputChangeEvent) => handleUserDataChange(e)}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel>Last Name</FormLabel>
                <Input
                    type="text"
                    value={userInputData.last_name}
                    name="last_name"
                    onChange={(e: InputChangeEvent) => handleUserDataChange(e)}
                />
            </FormGroup>
            <UpdateButton type="submit">Update</UpdateButton>
        </EditForm>
    );
};

export default UserEditForm;
