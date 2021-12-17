import React from 'react';
import { Header } from '../components/Header';
import styles from './main-page.module.scss';

export function MainPage(): JSX.Element {
    return (
        <div className={styles.mainPage}>
            <Header />
            <h1>Hello this is app, where you can work with your expenses</h1>
        </div>
    );
}