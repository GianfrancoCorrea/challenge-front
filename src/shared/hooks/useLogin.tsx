import { useEffect, useState } from "react";

const useLogin = () => {
    const [login, setLogin] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setLogin(true);
        }
    }, []);

    useEffect(() => {
        const previousToken = localStorage.getItem("token");
        if (token && token !== previousToken) {
            localStorage.setItem("token", token);
        }
    }, [token]);

    useEffect(() => {
        const previousUser = localStorage.getItem("user");
        if (user && user !== previousUser) {
            localStorage.setItem("user", user);
        }
    }, [user]);

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setLogin(false);
    };

    return {
        login,
        user: user || localStorage.getItem("user"),
        token: token || localStorage.getItem("token"),
        setToken,
        setUser,
        logout
    };
};

export default useLogin;
