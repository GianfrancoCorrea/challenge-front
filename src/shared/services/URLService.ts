import { reqresAPI, jsonplaceholderAPI } from "../constants";


const putUserByIdURL = (id: number) => (`${reqresAPI}/users/${id}`);
const getUsersURL = () => (`${reqresAPI}/users`);
const getPostsByUserIdURL = (id: number) => (`${jsonplaceholderAPI}/posts?userId=${id}`);
const updatePostByIdURL = (id: number) => (`${jsonplaceholderAPI}/posts/${id}`);

const users = {
    putUserByIdURL,
    getUsersURL
};

const posts = {
    getPostsByUserIdURL,
    updatePostByIdURL
};

export { 
    users,
    posts
 };
