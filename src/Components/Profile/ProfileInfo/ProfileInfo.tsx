import React from 'react';
import styles from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div className={styles.profileinfo}>
            <div className={styles.content_image}>
                <img
                    src="https://obustroeno.club/wp-content/uploads/2016/08/morskie-kamni-mogut-obladat-razlichnymi-ottenkami-chto-v-znachit-1024x640.jpg"
                    alt=""/>
            </div>
            <div className={styles.description}>Avatar & description</div>
        </div>

    )
}