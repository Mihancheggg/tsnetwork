import React from 'react';
import styles from './Contact.module.css'

type ContactPropsType = {
    title: string
    value: string
}

export const Contact = ({title, value}: ContactPropsType) => {
    return (
        <div className={styles.contact}>
            <b>{title}:</b>{value}
        </div>
    );
};