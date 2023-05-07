import axios from 'axios';
import { getUsersURL, putUserByIdURL } from './URLService';
import User from '../interfaces/user.interface';

interface PutUserByIdParams {
    id: number;
    body: Partial<User>;
  }

// PUT /api/users/{id}
const putUserById = (params: PutUserByIdParams) => axios
    .put<User>(putUserByIdURL(params.id), params.body)
    .then(response => ({ ...response.data, id: params.id }))
    .catch(error => {
        throw error;
    });

// GET /api/users
const getUsers = () => axios
    .get<{ data: User[] }>(getUsersURL())
    .then(response => response.data?.data)
    .catch(error => {
        throw error;
    });



export { putUserById, getUsers };
