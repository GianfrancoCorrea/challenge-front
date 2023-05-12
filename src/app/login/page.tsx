'use client';
import { Provider } from "react-redux";
import styles from '../page.module.css'
import store from "../redux/store";
import Form from './components/LoginForm';
import Container from "../components/Container";
import ButtonList from "../components/ButtonList";
import useLogin from '@/shared/hooks/useLogin';

export default function Home() {
    const { login, logout } = useLogin();

    return (
        <Provider store={store}>
            <Container background={'#fafafa'}>
                <main className={styles.main}>
                    <ButtonList login={login} logout={logout} selected={'login'} />
                    <div className={styles.center}>
                        <Form />
                    </div>
                </main>
            </Container>
        </Provider>
    )
}
