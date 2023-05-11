'use client';
import { Provider } from "react-redux";
import styles from '../page.module.css'
import store from "../redux/store";
import Form from './components/LoginForm';
import Container from "../components/Container";


export default function Home() {
    return (
        <Provider store={store}>
            <Container background={'#fafafa'}>
                <main className={styles.main}>
                    <div className={styles.description}>
                        <p>
                            <a href="/">&lt; go back</a>
                        </p>
                    

                    </div>

                    <div className={styles.center}>
                        <Form />
                    </div>

                    <div className={styles.grid}>

                    </div>
                </main>
            </Container>
        </Provider>
    )
}
