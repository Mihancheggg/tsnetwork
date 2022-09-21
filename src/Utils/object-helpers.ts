import {UserType} from '../Redux/Reducers/UsersReducer';

export const updateObjectInArray = (items: Array<UserType>, itemId: number, newProps: any) => {
    return items.map(el => el.id === itemId ? ({...el, ...newProps}) : el)
}