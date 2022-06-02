type PostsType = {
    id: number;
    message: string;
    likesCount: number;
}

type DialogsType = {
    id: number;
    name: string;
}

type MessagesType = {
    id: number;
    message: string;
}

type ProfilePageType = {
    posts: Array<PostsType>
}

type DialogsPageType = {
    dialogs: Array<DialogsType>;
    messages: Array<MessagesType>
}

type SidebarType = {

}

type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebar: SidebarType;
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 10},
            {id: 4, message: 'Dada', likesCount: 9},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hey'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Hello'},
            {id: 5, message: 'Bye'},
        ]
    },
    sidebar: {}
}

export default state