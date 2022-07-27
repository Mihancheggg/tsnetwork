import React from 'react';
import {UsersContainerDataType} from './UsersContainer';
import styles from './Users.module.css'
import {v1} from 'uuid';

export const Users = (props: UsersContainerDataType) => {

    if (props.users.length === 0) {
        props.setUsers([
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
        ])
    }

    return (
        <div>
            {props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photoUrl} alt="" className={styles.photo}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => props.unfollowUser(el.id)}>Unfollow</button>
                            : <button onClick={() => props.followUser(el.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.fullName}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>
                            {el.location.city}
                        </div>
                        <div>
                            {el.location.country}
                        </div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};
