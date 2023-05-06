import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserAvatar, UserCard, UserEmail, UserGridContainer, UserName } from './UserGrid.styled';

interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  transition: transform 1s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
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

const UserGrid = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [updatedUserData, setUpdatedUserData] = useState({
        first_name: '',
        last_name: '',
        email: ''
    });

    const openSidebar = user => {
        setSelectedUser(user);
        setIsSidebarOpen(true);
        setUpdatedUserData({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        });
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        setSelectedUser(null);
    };

    const handleInputChange = e => {
        const { name, value } = e.target;
        setUpdatedUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleUpdateUser = (e) => {
        e.preventDefault();
        // Realizar solicitud PUT a /api/users/{id} para actualizar los datos del usuario
        fetch(`https://reqres.in/api/users/${selectedUser.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUserData)
        })
            .then(response => response.json())
            .then(data => {
                // Actualizar la lista de usuarios con los datos actualizados
                const updatedUsers = users.map(user => {
                    if (user.id === selectedUser.id) {
                        return {
                            ...user,
                            ...updatedUserData
                        };
                    }
                    return user;
                });
                setUsers(updatedUsers);
                closeSidebar();
            })
            .catch(error => {
                console.error('Error:', error);
                // Aquí puedes manejar el error si ocurre alguno
            });
    };

    useEffect(() => {
        // Realizar solicitud GET a /api/users para obtener la lista de usuarios
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(data => {
                // La respuesta contiene la lista de usuarios en la propiedad "data"
                const usersData = data.data;
                setUsers(usersData);
            })
            .catch(error => {
                console.error('Error:', error);
                // Aquí puedes manejar el error si ocurre alguno
            });
    }, []);

    return (
        <>
            <UserGridContainer>
                {users.map(user => (
                    <UserCard key={user.id} onClick={() => openSidebar(user)}>
                        <UserAvatar src={user.avatar} alt="User Avatar" />
                        <UserName>{`${user.first_name} ${user.last_name}`}</UserName>
                        <UserEmail>{user.email}</UserEmail>
                    </UserCard>
                ))}
            </UserGridContainer>
            {selectedUser && (
                <SidebarContainer isOpen={isSidebarOpen}>
                    <SidebarTitle>Edit User</SidebarTitle>
                    <EditForm>
                        <FormGroup>
                            <FormLabel htmlFor="first_name">First Name</FormLabel>
                            <FormInput
                                type="text"
                                name="first_name"
                                id="first_name"
                                value={updatedUserData.first_name}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel htmlFor="last_name">Last Name</FormLabel>
                            <FormInput
                                type="text"
                                name="last_name"
                                id="last_name"
                                value={updatedUserData.last_name}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormInput
                                type="text"
                                name="email"
                                id="email"
                                value={updatedUserData.email}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <UpdateButton onClick={handleUpdateUser}>Update</UpdateButton>
                    </EditForm>
                </SidebarContainer>
            )}
        </>
    );
};

export default UserGrid;