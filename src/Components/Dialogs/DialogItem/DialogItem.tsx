import React from 'react';
import styles from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';

export type DialogItemType = {
    name: string;
    id: string
}

export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={styles.dialog} key={props.id}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
};
