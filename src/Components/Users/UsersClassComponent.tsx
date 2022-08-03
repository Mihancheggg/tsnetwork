import React from 'react';
import styles from './Users.module.css';
import user_image from '../../Assets/Images/user_image.png';
import {UserType} from '../../Redux/Reducers/UsersReducer';
import {v1} from 'uuid';

type UsersComponentPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged:(pageNumber: number) => void
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
}

export const UsersClassComponent = (props: UsersComponentPropsType) => {

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