import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

type MenuItemsType = Array<MenuItemType>

type MenuItemType = {
    link: string,
    name: string,
}

export const Navbar = () => {

// for map
    const menuItems: MenuItemsType = [
        {link: "/profile", name: 'Profile'},
        {link: "/dialogs", name: 'Messages'},
        {link: "/users", name: 'Users'},
        {link: "/news", name: 'News'},
        {link: "/music", name: 'Music'},
        {link: "/settings", name: 'Settings'},
        {link: "/friends", name: 'Friends'},
    ]

    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/users" activeClassName={styles.active}>Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news" activeClassName={styles.active}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/music" activeClassName={styles.active}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/friends" activeClassName={styles.active}>Friends</NavLink>
                <div>
                    <img src="https://clck.ru/rDhjm" alt=""/>
                    <img src="https://clck.ru/rDhjm" alt=""/>
                    <img src="https://clck.ru/rDhjm" alt=""/>
                </div>

            </div>
        </nav>
    )
};