import axios from 'axios';
import { users, posts } from './URLService';
import User from '../interfaces/user.interface';
import Post from '../interfaces/post.interface';

interface PutUserByIdParams {
    id: number;
    body: Partial<User>;
  }

const putUserById = (params: PutUserByIdParams) => axios
    .put<User>(users.putUserByIdURL(params.id), params.body)
    .then(response => ({ ...response.data, id: params.id }))
    .catch(error => {
        throw error;
    });

const getUsers = () => axios
    .get<{ data: User[] }>(users.getUsersURL())
    .then(response => response.data?.data)
    .catch(error => {
        throw error;
    });

const getPostsByUserId = (id: number) => axios
    .get<Post[]>(posts.getPostsByUserIdURL(id))
    .then(response => response.data)
    .catch(error => {
        throw error;
    });

const deletePostById = (post: Post) => axios
    .delete<Post>(posts.deletePostByIdURL(post.id, post.userId))
    .then(response => ({ ...response.data, post }))
    .catch(error => {
        throw error;
    });

const userLogin = (body: { email: string; password: string }) => axios
    .post<{ token: string }>(users.loginURL(), body)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });

const usersAPI = {
    putUserById,
    getUsers,
    userLogin,
};

const postsAPI = {
    getPostsByUserId,
    deletePostById,
};

export { usersAPI, postsAPI };
