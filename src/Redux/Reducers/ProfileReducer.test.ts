import {addPostActionCreator, deletePostActionCreator, profileReducer} from './ProfileReducer';
import {ProfilePagePropsType} from '../../App';

let startState: ProfilePagePropsType;

beforeEach(() => {
    startState = {
        myPostsData: [
            {id: '1', message: 'Hi, how are you?', likes: 22},
            {id: '2', message: 'Very nice!', likes: 8},
            {id: '3', message: 'It is my second post', likes: 19},
            {id: '4', message: 'It is my first post', likes: 15}
        ],
        profile: null,
        status: ''
    }
})

test('new post adding', () => {
    let action = addPostActionCreator('Hi')
    let newState = profileReducer(startState, action)

    expect(newState.myPostsData.length).toBe(5)
    expect(newState.myPostsData[4].message).toBe('Hi')
})

test('delete post', () => {
    let action = deletePostActionCreator('2')
    let newState = profileReducer(startState, action)

    expect(newState.myPostsData.length).toBe(3)
    expect(newState.myPostsData[1].message).toBe('It is my second post')
})