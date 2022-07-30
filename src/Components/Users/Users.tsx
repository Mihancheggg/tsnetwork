import React from 'react';
import {UsersContainerDataType} from './UsersContainer';
import styles from './Users.module.css'
import {v1} from 'uuid';
import axios from 'axios';
import user_image from './../../Assets/Images/user_image.png'

export const Users = (props: UsersContainerDataType) => {

    const getUsers = () => {
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    /*props.setUsers([
        {
            id: v1(),
            photoUrl: 'https://clck.ru/rDhjm',
            followed: false,
            fullName: 'Dmitry Kuzyberdin',
            status: 'I am boss',
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: v1(),
            photoUrl: 'https://clck.ru/rDhjm',
            followed: true,
            fullName: 'Yaroslav Prokofiev',
            status: 'Chilling...',
            location: {country: 'Russia', city: 'Tver'}
        },
        {
            id: v1(),
            photoUrl: 'https://clck.ru/rDhjm',
            followed: true,
            fullName: 'Andrew Romanenkov',
            status: 'Middle+ front-end developer',
            location: {country: 'Russia', city: 'Tver'}
        },
    ])*/


    return (

        <div>
            <button onClick={getUsers}>Get users</button>
            {props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photos.small !== null ? el.photos.small : user_image} alt=""
                             className={styles.photo}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => props.unfollowUser(el.id)}>Unfollow</button>
                            : <button onClick={() => props.followUser(el.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>
                            {'el.location.city'}
                        </div>
                        <div>
                            {'el.location.country'}
                        </div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};
