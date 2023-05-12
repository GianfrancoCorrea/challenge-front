import { useEffect, useState } from "react";

const isServer = typeof window === "undefined";
const manageLocalStorage = {
    get: {
        token: !isServer ? localStorage.getItem("token") : null,
        user: !isServer ? localStorage.getItem("user") : null
    },
    set: {
        token: (token: string) => !isServer ? localStorage.setItem("token", token) : null,
        user: (user: string) => !isServer ? localStorage.setItem("user", user) : null
    },
    remove: {
        token: () => !isServer ? localStorage.removeItem("token") : null,
        user: () => !isServer ? localStorage.removeItem("user") : null
    }
};

const useLogin = () => {
    const [login, setLogin] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        const token = manageLocalStorage.get.token;
        if (token) {
            setLogin(true);
        }
    }, []);

    useEffect(() => {
        const previousToken = manageLocalStorage.get.token;
        if (token && token !== previousToken) {
           manageLocalStorage.set.token(token);
        }
    }, [token]);

    useEffect(() => {
        const previousUser = localStorage.getItem("user");
        if (user && user !== previousUser) {
            manageLocalStorage.set.user(user);
        }
    }, [user]);

    const logout = () => {
        manageLocalStorage.remove.token();
        manageLocalStorage.remove.user();
        setLogin(false);
    };

    return {
        login,
        user: user || manageLocalStorage.get.user,
        token: token || manageLocalStorage.get.token,
        setToken,
        setUser,
        logout
    };
};

export default useLogin;
