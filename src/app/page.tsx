"use client";
import styles from './page.module.css'
import { Provider } from "react-redux";
import store from "./redux/store";
import Container from "./components/Container";
import UserGrid from './components/UserGrid';

export default function Home() {
    return (
        <Provider store={store}>
            <Container background={'#fafafa'}>
                <main className={styles.main}>
                    <div className={styles.description}>
                        <p>
                            <a href="/login">{'Login'}</a>
                        </p>
                      
                    </div>

                    <UserGrid />
      
                </main>
            </Container>
        </Provider>
    )
}
