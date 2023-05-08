'use client';
import Image from 'next/image'
import styles from './page.module.css'
import { Provider } from "react-redux";
import store from "./redux/store";
import { useState } from "react";
import Container from "./components/Container";
import UserGrid from './components/UserGrid';

export default function Home() {
    const [click, setClick] = useState(false);

    function handleClick() {
        setClick(!click)
    }

    return (
        <Provider store={store}>
            <Container background={click ? '#fefefe' : 'steelblue'}>
                <main className={styles.main}>
                    <div className={styles.description}>
                        <button onClick={handleClick}>styles test</button>
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
