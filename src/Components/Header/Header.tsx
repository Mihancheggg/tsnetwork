import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <img
                src="https://avatars.mds.yandex.net/i?id=4707672b8fb4a03b34d8e2780edd869f-5630042-images-thumbs&n=13"
                alt="logo"/>
        </header>
    )
};