import {DialogsReducerActionTypes} from './Reducers/DialogsReducer';
import {ProfileReducerActionTypes} from './Reducers/ProfileReducer';

/*type StoreType = {
    _callSubscriber: (_state2: AppPropsType) => void
    _state2: AppPropsType
    subscribe: (observer: () => void) => void
    getState2: () => AppPropsType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionTypes) => void
};

type AddPostActionType = {
    type: 'ADD-POST'
};

type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
};*/

// type UpdateNewMessageTextActionType = {
//     type: 'UPDATE-NEW-MESSAGE-TEXT',
//     newText: string
// };
//
// type AddMessageActionType = {
//     type: 'ADD-MESSAGE'
// };

/*type ActionTypes =
    ProfileReducerActionTypes
    | DialogsReducerActionTypes;*/

/*let store: StoreType = {
    // private info
    _callSubscriber() {
        console.log('State was changed')
    },

    _state2: {
        profilePage: {
            myPostsData: [
                {id: v1(), message: 'Hi, how are you?', likes: 22},
                {id: v1(), message: 'Very nice!', likes: 8},
                {id: v1(), message: 'It is my second post', likes: 19},
                {id: v1(), message: 'It is my first post', likes: 15}
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogsData: [
                {id: v1(), name: 'Vasya', img: 'https://live.staticflickr.com/7572/26312703593_c983190d6c_b.jpg'},
                {id: v1(), name: 'Kate', img: 'https://live.staticflickr.com/7572/26312703593_c983190d6c_b.jpg'},
                {id: v1(), name: 'Leonid', img: 'https://live.staticflickr.com/7572/26312703593_c983190d6c_b.jpg'},
                {id: v1(), name: 'Alex', img: 'https://live.staticflickr.com/7572/26312703593_c983190d6c_b.jpg'}
            ],
            messagesData: [
                {
                    id: v1(),
                    message: 'Hi',
                    img: 'https://i.pinimg.com/736x/3c/92/34/3c9234554d0f72bc4b131ae7ee830d20--bunny-bunny-bunny-rabbits.jpg'
                },
                {
                    id: v1(),
                    message: 'How are you?',
                    img: 'https://i.pinimg.com/736x/3c/92/34/3c9234554d0f72bc4b131ae7ee830d20--bunny-bunny-bunny-rabbits.jpg'
                },
                {
                    id: v1(),
                    message: 'Very good',
                    img: 'https://i.pinimg.com/736x/3c/92/34/3c9234554d0f72bc4b131ae7ee830d20--bunny-bunny-bunny-rabbits.jpg'
                },
            ],
            newMessageText: '',
        },
        sidebar: {}
    },

    // state changing methods
    getState2() {
        return (this._state2)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    // public
    /!*addPost() {
        /!*let newPostState = *!/
        this._state2.profilePage.myPostsData.push({id: v1(), message: this._state2.profilePage.newPostText, likes: 0})
        this._callSubscriber();
        this.updateNewPostText('');
    },

    updateNewPostText(newText) {
        this._state2.profilePage.newPostText = newText
        this._callSubscriber()
    },*!/

    dispatch(action) { // action - { type: ADD-POST }

        // this._state2.profilePage = profileReducer(this._state2.profilePage, action)
        // this._state2.dialogsPage = dialogsReducer(this._state2.dialogsPage, action)
        // this._state2.sidebar = sidebarReducer(this._state2.sidebar, action)

        this._callSubscriber(this._state2);

        /!*if (action.type === 'ADD-POST') {
            this._state2.profilePage.myPostsData.push({
                id: v1(),
                message: this._state2.profilePage.newPostText,
                likes: 0
            })
            this._callSubscriber();
            this._state2.profilePage.newPostText = '';
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state2.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state2.dialogsPage.newMessageText = action.newText
            this._callSubscriber()
        } else if (action.type === 'ADD-MESSAGE') {
            this._state2.dialogsPage.messagesData.push({
                id: v1(),
                message: this._state2.dialogsPage.newMessageText,
                img: 'https://i.pinimg.com/736x/3c/92/34/3c9234554d0f72bc4b131ae7ee830d20--bunny-bunny-bunny-rabbits.jpg'
            })
            this._callSubscriber();
            this._state2.dialogsPage.newMessageText = '';
        }*!/
    }

};*/
