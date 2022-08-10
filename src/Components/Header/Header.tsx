import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

export type HeaderPropsType = {
    login: string | null,
    isAuth: boolean
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={styles.header}>
            <img
                src="https://avatars.mds.yandex.net/i?id=4707672b8fb4a03b34d8e2780edd869f-5630042-images-thumbs&n=13"
                alt="logo"/>
            <div className={styles.loginBlock}>
                {props.isAuth ? props.login :<NavLink to={'/login'}>
                    Login
                </NavLink>}

            </div>
        </header>
    )
};