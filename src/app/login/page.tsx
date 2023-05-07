'use client';
import { Provider } from "react-redux";
import styles from '../page.module.css'
import store from "../redux/store";
import Form from './components/LoginForm';


export default function Home() {
    return (
        <Provider store={store}>
            <main className={styles.main}>
                <div className={styles.description}>
                    <p>
                        <a href="/">&lt; go back</a>
                    </p>
                    <p>
                        editing&nbsp;
                        <code className={styles.code}>src/app/login/page.tsx</code>
                    </p>

                </div>

                <div className={styles.center}>
                    <Form />
                </div>

                <div className={styles.grid}>

                </div>
            </main>
        </Provider>
    )
}
