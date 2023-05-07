import { useEffect, useState } from 'react';
import { UserAvatar, UserCard, UserEmail, UserGridContainer, UserName } from './UserGrid.styled';
import Sidebar from './Sidebar';
import User from '@/shared/interfaces/user.interface';
import { putUserById } from '@/shared/services/APIService';
import { RootState, useAppDispatch, useAppSelector } from '../redux/store';
import { fetchUsers, updateUser } from '../redux/usersSlice';

const UserGrid = () => {

    const dispatch = useAppDispatch();
    const usersData = useAppSelector((state: RootState) => state.users.data as User[]);
    const loading = useAppSelector((state: RootState) => state.users.loading);
    const error = useAppSelector((state: RootState) => state.users.error);

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

    const handleUpdateUser = (newUserData: User) => {
        // PUT /api/users/{id}
        const body = {
            email: newUserData.email,
            first_name: newUserData.first_name,
            last_name: newUserData.last_name,
        };
        putUserById({ id: newUserData.id, body })
            .then((response) => {
                dispatch(updateUser({
                    id: newUserData.id,
                    email: response.email,
                    first_name: response.first_name,
                    last_name: response.last_name,
                }))
            })
            .finally(() => {
                closeSidebar();
            });
    };

useEffect(() => {
    // GET /api/users
    dispatch(fetchUsers());
}, [dispatch]);

return (
    <>
        <UserGridContainer>
            {usersData?.map(user => (
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
