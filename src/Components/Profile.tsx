import React from 'react';
import styles from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={styles.content}>

            <div>
                <img
                    src="https://obustroeno.club/wp-content/uploads/2016/08/morskie-kamni-mogut-obladat-razlichnymi-ottenkami-chto-v-znachit-1024x640.jpg"
                    alt=""/>
            </div>

            <div>Avatar & description</div>

            <div>
                Posts
                <div>
                    New post
                </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                    <div>Post 3</div>
                </div>
            </div>

        </div>
    )
};