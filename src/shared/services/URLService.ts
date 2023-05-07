import { apiURL } from "../constants";


const putUserByIdURL = (id: number) => (`${apiURL}/users/${id}`);
const getUsersURL = () => (`${apiURL}/users`);

export { putUserByIdURL, getUsersURL };
