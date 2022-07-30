import state from '../state';
import {v1} from 'uuid';

export type UsersType = {
    users: Array<UserType>
}

export type UserType = {
    id: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: {
        country: string
        city: string
    }
}

let initialState: UsersType = {
    /*users: [
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
    ]*/
    users: []
}

export type UsersReducerActionTypes = followUserACType | unfollowUserACType | setUserACType

type followUserACType = ReturnType<typeof followUserAC>

type unfollowUserACType = ReturnType<typeof unfollowUserAC>

type setUserACType = ReturnType<typeof setUsersAC>

export const followUserAC = (userId: string) => {
    return {
        type: 'FOLLOW-USER',
        userId: userId
    } as const
}

export const unfollowUserAC = (userId: string) => {
    return {
        type: 'UNFOLLOW-USER',
        userId: userId
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

export const usersReducer = (state: UsersType = initialState, action: UsersReducerActionTypes): UsersType => {
    switch (action.type) {
        case 'FOLLOW-USER': {
            let newState = {
                ...state,
                users: state.users.map(el => el.id === action.userId ? ({...el, followed: true}) : el)
            }
            return newState
        }
        case 'UNFOLLOW-USER': {
            let newState = {
                ...state,
                users: state.users.map(el => el.id === action.userId ? ({...el, followed: false}) : el)
            }
            return newState
        }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}