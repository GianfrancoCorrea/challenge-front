"use client";
import styles from './page.module.css'
import { Provider } from "react-redux";
import store from "./redux/store";
import Container from "./components/Container";
import UserGrid from './components/UserGrid';
import useLogin from '@/shared/hooks/useLogin';
import ButtonList from './components/ButtonList/ButtonList';

export default function Home() {
    const { login, user, logout } = useLogin();

    return (
        <Provider store={store}>
            <Container background={'#fafafa'}>
                <main className={styles.main}>
                    <ButtonList login={login} logout={logout} selected={'home'} />
                    {login && (
                    <p>
                        logged in as <strong>{user}</strong>
                    </p>
                    )}

                    <UserGrid />

                </main>
            </Container>
        </Provider>
    )
}
