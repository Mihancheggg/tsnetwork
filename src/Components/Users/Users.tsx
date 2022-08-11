import React from 'react';
import styles from './Users.module.css';
import user_image from '../../Assets/Images/user_image.png';
import {UserType} from '../../Redux/Reducers/UsersReducer';
import {v1} from 'uuid';
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../API/API';

type UsersComponentPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void
}

export const Users = (props: UsersComponentPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(el => <span key={v1()}
                                       className={props.currentPage === el ? styles.selectedPage : ''}
                                       onClick={(event) => props.onPageChanged(el)}>{el}</span>)}
            </div>
            {props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + el.id}>
                            <img src={el.photos.small !== null ? el.photos.small : user_image} alt=""
                                 className={styles.photo}/>
                        </NavLink>
                    </div>
                    <div>
                        {el.followed
                            ? <button disabled={props.followingInProgress.some(item=> item === el.id)} onClick={() => {
                                props.toggleFollowingProgress(true,el.id)
                                usersAPI.unfollowUser(el.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollowUser(el.id)
                                        }
                                        props.toggleFollowingProgress(false,el.id)
                                    })
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(item=> item === el.id)} onClick={() => {
                                props.toggleFollowingProgress(true,el.id)
                                usersAPI.followUser(el.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.followUser(el.id)
                                        }
                                        props.toggleFollowingProgress(false,el.id)
                                    })
                            }}>Follow</button>}
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