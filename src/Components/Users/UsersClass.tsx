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
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (<div>
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