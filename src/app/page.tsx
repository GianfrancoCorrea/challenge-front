'use client';
import Image from 'next/image'
import styles from './page.module.css'
import { Provider } from "react-redux";
import store from "./store";
import { useState } from "react";
import Container from "./components/Container";
import UserGrid from './components/UserGrid';

export default function Home() {
    const [click, setClick] = useState(false);

    function handleClick() {
        setClick(!click)
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(data => {
                const users = data.data;
                console.log(users);
            })
            .catch(error => {
                console.error('Error:', error);
            });
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

       
                    <div className={styles.description}>
                        <UserGrid />
                    </div>
                </main>
            </Container>
        </Provider>
    )
}
