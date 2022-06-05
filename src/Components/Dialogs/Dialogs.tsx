import React from 'react';
import styles from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <div className={styles.dialog + ' ' + styles.active}>Vasya</div>
                <div className={styles.dialog}>Kate</div>
                <div className={styles.dialog}>Leonid</div>
                <div className={styles.dialog}>Alex</div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>How are you?</div>
                <div className={styles.message}>Very good</div>
            </div>
        </div>
    )
};