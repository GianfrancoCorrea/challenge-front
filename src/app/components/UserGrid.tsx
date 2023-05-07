import { useEffect, useState } from 'react';
import { UserAvatar, UserCard, UserEmail, UserGridContainer, UserName } from './UserGrid.styled';
import Sidebar from './Sidebar';
import User from '@/shared/interfaces/user.interface';
import { getUsers, putUserById } from '@/shared/services/APIService';

const UserGrid = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = (user: User) => {
        setSelectedUser(user);
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        setSelectedUser(null);
    };


    const handleUpdateUser = ({ id, email, first_name, last_name}: User) => {
        // PUT /api/users/{id}
        const body = {
            email,
            first_name,
            last_name,
        };
        putUserById({ id, body })
            .then((data) => {
                const updatedUsers = users.map(user => {
                    if (user.id === id) {
                        return {
                            ...user,
                            email: data.email, 
                            first_name: data.first_name,
                            last_name: data.last_name,
                        };
                    }
                    return user;
                });
                setUsers(updatedUsers);
                closeSidebar();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        // GET /api/users
        getUsers()
            .then(userData => {
                setUsers(userData);
            })
            .catch(error => {
                console.error('Error:', error);
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
               <Sidebar 
                    isOpen={isSidebarOpen}
                    user={selectedUser}
                    updateUser={handleUpdateUser}
               />
            )}
        </>
    );
};

export default UserGrid;
