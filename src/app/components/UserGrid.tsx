import { useEffect, useState } from 'react';
import { UserAvatar, UserCard, UserEmail, UserGridContainer, UserName } from './UserGrid.styled';
import Sidebar from './Sidebar';
import User from '@/shared/interfaces/user.interface';
import { putUserById } from '@/shared/services/APIService';
import { RootState, useAppDispatch, useAppSelector } from '../redux/store';
import { fetchUsers, updateUser } from '../redux/usersSlice';
import UserEditForm from './UserEditForm';
import { SidebarTitle } from './Sidebar.styled';

const UserGrid = () => {

    const dispatch = useAppDispatch();
    const usersData = useAppSelector((state: RootState) => state.users.data as User[]);
    const loading = useAppSelector((state: RootState) => state.users.loading);
    const error = useAppSelector((state: RootState) => state.users.error);

    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const openSidebar = (user: User): void => {
        setSelectedUser(user);
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        setSelectedUser(null);
    };

    const handleUpdateUser = (newUserData: User) => {
        dispatch(updateUser(newUserData))
            .finally(() => closeSidebar());
    };

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
                    closeSidebar={closeSidebar}
                >
                    <SidebarTitle>Edit User</SidebarTitle>
                    <UserEditForm user={selectedUser} updateUser={handleUpdateUser} />
                </Sidebar>
            )}
        </>
    );
};

export default UserGrid;
