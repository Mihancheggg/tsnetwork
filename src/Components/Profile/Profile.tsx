import React from 'react';
import styles from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div>

            <div className={styles.content_image}>
                <img
                    src="https://obustroeno.club/wp-content/uploads/2016/08/morskie-kamni-mogut-obladat-razlichnymi-ottenkami-chto-v-znachit-1024x640.jpg"
                    alt=""/>
            </div>

            <div>Avatar & description</div>

            <MyPosts/>

        </div>
    )
};