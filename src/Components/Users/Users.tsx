import React from 'react';
import styles from './Users.module.css';
import user_image from '../../Assets/Images/user_image.png';
import {UserType} from '../../Redux/Reducers/UsersReducer';
import {v1} from 'uuid';
import {NavLink, Redirect} from 'react-router-dom';
import {store} from '../../Redux/ReduxStore';

type UsersComponentPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}

export const Users = (props: UsersComponentPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let state = store.getState()

    if(!state.authReducer.isAuth) return <Redirect to={'/login'}/>

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
                            ? <button disabled={props.followingInProgress.some(item => item === el.id)} onClick={() => {
                                props.unfollowUser(el.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(item => item === el.id)} onClick={() => {
                                props.followUser(el.id)
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