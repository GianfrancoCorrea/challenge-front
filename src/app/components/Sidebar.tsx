import { ChangeEvent, FormEvent, useState } from "react";
import User from '@/shared/interfaces/user.interface';
import { 
	SidebarContainer, SidebarTitle, EditForm, FormGroup,
	FormLabel, FormInput, UpdateButton
} from './Sidebar.styled';

type InputChangeEvent = ChangeEvent<HTMLInputElement>;
interface SidebarProps {
    isOpen: boolean;
    user: User;
    updateUser: (user: User) => void;
}

const Sidebar = ({ isOpen, user, updateUser }: SidebarProps) => {

	const [userData, setUserData] = useState({
		first_name: user.first_name,
		last_name: user.last_name,
		email: user.email,
	});

	const handleUserDataChange = (e: InputChangeEvent) => {
		const { name, value } = e.target;
		setUserData({
			...userData,
			[name]: value,
		});
	};
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const userUpdated: User = {
            id: user.id,
            email: userData.email,
			first_name: userData.first_name,
			last_name: userData.last_name,
            avatar: user.avatar
        };

        return updateUser(userUpdated);
    };

    return (
        <SidebarContainer $isSidebarOpen={isOpen}>
			<SidebarTitle>Edit User</SidebarTitle>
			<EditForm onSubmit={handleSubmit}>
				<FormGroup>
					<FormLabel>Email</FormLabel>
					<FormInput
						type="email"
						value={userData.email}
						name="email"
						onChange= {(e: InputChangeEvent) => handleUserDataChange(e)}
					/>
				</FormGroup>
				<FormGroup>
					<FormLabel>First Name</FormLabel>
					<FormInput
						type="text"
						value={userData.first_name}
						name="first_name"
						onChange={(e: InputChangeEvent) => handleUserDataChange(e)}
					/>
					</FormGroup>
				<FormGroup>
					<FormLabel>Last Name</FormLabel>
					<FormInput
						type="text"
						value={userData.last_name}
						name="last_name"
						onChange={(e: InputChangeEvent) => handleUserDataChange(e)}
					/>
				</FormGroup>
				<UpdateButton type="submit">Update</UpdateButton>
			</EditForm>
        </SidebarContainer>
    );
};

export default Sidebar;
