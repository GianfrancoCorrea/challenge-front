import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import User from '@/shared/interfaces/user.interface';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchUsers, updateUser } from '../../redux/usersSlice';
import UserEditForm from '../UserEditForm';
import UserPosts from '../UserPosts';
import Image from 'next/image';
import PencilIcon from '@/shared/assets/pencil.svg';
import {
    DivFlex, PencilIconWrapper, UserAvatar, UserCard,
    UserDetailsContainer, UserEmail, UserGridContainer,
    UserName
} from './UserGrid.styled';
import { motion } from 'framer-motion';
import Loading from '@/shared/components/Loading';

const UserGrid = () => {

    const dispatch = useAppDispatch();
    const usersData = useAppSelector((state: RootState) => state.users.data as User[]);
    const loading = useAppSelector((state: RootState) => state.users.loading);
    const error = useAppSelector((state: RootState) => state.users.error);

    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

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
        setIsEditing(false);
    };

    const handleUpdateUser = (newUserData: User) => {
        dispatch(updateUser(newUserData))
            .finally(() => {
                setIsEditing(false);
                setSelectedUser(newUserData);
            });
    };

    return (
        <>
            <UserGridContainer>
                {usersData?.map((user, index) => (
                    <UserCard
                        as={motion.div}
                        transition={{ delay: 0.1 * index, ease: "easeOut", duration: 0.2 }}
                        initial={{ y: "-100px", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        key={`userId-${user.id}`}
                        onClick={() => openSidebar(user)}
                        $isSelected={selectedUser?.id === user.id}
                    >
                        <UserAvatar src={user.avatar} alt="User Avatar" />
                        <UserName>{`${user.first_name} ${user.last_name}`}</UserName>
                        <UserEmail>{user.email}</UserEmail>
                    </UserCard>
                ))}
                {(!usersData || loading) && <Loading />}
            </UserGridContainer>
            <Sidebar
                isOpen={isSidebarOpen}
                closeSidebar={closeSidebar}
            >
                {selectedUser?.id && (
                    <>
                        <DivFlex>
                            <UserAvatar src={selectedUser.avatar} alt="User Avatar" />
                            {!isEditing ? (
                                <UserDetailsContainer onClick={() => setIsEditing(true)}>
                                    <UserName>{`${selectedUser.first_name} ${selectedUser.last_name}`}</UserName>
                                    <UserEmail>{selectedUser.email}</UserEmail>
                                    <PencilIconWrapper>
                                        <Image src={PencilIcon} alt="Edit Icon" />
                                    </PencilIconWrapper>
                                </UserDetailsContainer>
                            ) : (
                                <UserEditForm user={selectedUser} updateUser={handleUpdateUser} onClose={() => setIsEditing(false)} />
                            )}
                        </DivFlex>
                        <br />
                        <UserPosts userId={selectedUser.id} />
                    </>
                )}
            </Sidebar>
        </>
    );
};

export default UserGrid;
