import axios from 'axios';
import { users, posts } from './URLService';
import User from '../interfaces/user.interface';
import Post from '../interfaces/post.interface';

interface PutUserByIdParams {
    id: number;
    body: Partial<User>;
  }

// PUT /api/users/{id}
const putUserById = (params: PutUserByIdParams) => axios
    .put<User>(users.putUserByIdURL(params.id), params.body)
    .then(response => ({ ...response.data, id: params.id }))
    .catch(error => {
        throw error;
    });

// GET /api/users
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

const updatePostById = (id: number, body: Partial<Post>) => axios
    .put<Post>(posts.updatePostByIdURL(id), body)
    .then(response => ({ ...response.data, id }))
    .catch(error => {
        throw error;
    });


const usersAPI = {
    putUserById,
    getUsers,
};

const postsAPI = {
    getPostsByUserId,
    updatePostById,
};


export { usersAPI, postsAPI };
