import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

export const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <div className={styles.dialog + ' ' + styles.active}>
                    <NavLink to="/dialogs/vasya">Vasya</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/kate">Kate</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/leonid">Leonid</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/alex">Alex</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>How are you?</div>
                <div className={styles.message}>Very good</div>
            </div>
        </div>
    )
};