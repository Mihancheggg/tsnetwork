import React from 'react';
import {NavLink} from 'react-router-dom';
import user_image from '../../../Assets/Images/user_image.png';
import styles from '../Users.module.css';
import {UserType} from '../../../Redux/Reducers/UsersReducer';

type UserPropsType = {
    user: UserType
    followingInProgress: Array<number>
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}

export const User = ({user, followingInProgress, followUser, unfollowUser}: UserPropsType) => {
    return (
        <div key={user.id}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : user_image} alt=""
                         className={styles.photo}/>
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(item => item === user.id)} onClick={() => {
                        unfollowUser(user.id)
                    }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(item => item === user.id)} onClick={() => {
                        followUser(user.id)
                    }}>Follow</button>}
            </div>

            <div>{user.name}</div>
            <div>{user.status}</div>

            <div>
                {'user.location.city'}
            </div>
            <div>
                {'user.location.country'}
            </div>
        </div>
    );
};

