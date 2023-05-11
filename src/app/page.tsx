"use client";
import styles from './page.module.css'
import { Provider } from "react-redux";
import store from "./redux/store";
import Container from "./components/Container";
import UserGrid from './components/UserGrid';
import useLogin from '@/shared/hooks/useLogin';

export default function Home() {
    const { login, user, logout } = useLogin();

    return (
        <Provider store={store}>
            <Container background={'#fafafa'}>
                <main className={styles.main}>
                    <div className={styles.description}>
                        {
                            login ? (
                                <>
                                    <p>
                                        <a href="#" onClick={() => logout()}>{'Logout'}</a>
                                    </p>
                                    <p>
                                        logged in as <strong>{user}</strong>
                                    </p>
                                </>
                            ) : (
                                <p>
                                    <a href="/login">{'Login'}</a>
                                </p>
                            )
                        }
                    </div>

                    <UserGrid />

                </main>
            </Container>
        </Provider>
    )
}
