import React from 'react';
import user_image from '../../Assets/Images/user_image.png';
import styles from './Users.module.css';
import axios from 'axios';
import {UsersType} from '../../Redux/Reducers/UsersReducer';
import {UsersContainerDataType} from './UsersContainer';

export class UsersClass extends React.Component<UsersContainerDataType, UsersType> {

    /*constructor(props: UsersContainerDataType) {
        super(props);
    }*/

    //super - переброска пропсов прототипу. Если кроме этого конструктор ничего не делает, можно не писать

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages: Array<number> = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (<div>
            <div>
                {pages.map(el => <span
                    className={this.props.currentPage === el ? styles.selectedPage : ''}
                    onClick={(event) => this.onPageChanged(el)}>{el}</span>)}
            </div>
            {this.props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photos.small !== null ? el.photos.small : user_image} alt=""
                             className={styles.photo}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => this.props.unfollowUser(el.id)}>Unfollow</button>
                            : <button onClick={() => this.props.followUser(el.id)}>Follow</button>}
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
        </div>)
    }
}