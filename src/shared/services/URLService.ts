import { reqresAPI, jsonplaceholderAPI } from "../constants";


const putUserByIdURL = (id: number) => (`${reqresAPI}/users/${id}`);
const getUsersURL = () => (`${reqresAPI}/users`);
const getPostsByUserIdURL = (id: number) => (`${jsonplaceholderAPI}/posts?userId=${id}`);
const deletePostByIdURL = (postId: number, userId: number) => (`${jsonplaceholderAPI}/posts/${postId}?userId=${userId}`);
const loginURL = () => (`${reqresAPI}/login`);

const users = {
    putUserByIdURL,
    getUsersURL,
    loginURL
};

const posts = {
    getPostsByUserIdURL,
    deletePostByIdURL
};

export { 
    users,
    posts
 };
