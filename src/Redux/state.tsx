import React from 'react';
import {v1} from 'uuid';

type PostType = {
    id: string;
    message: string;
    likesCount: number;
}

type DialogItemType = {
    id: string;
    name: string;
}

type MessageItemType = {
    id: string;
    message: string;
}

type ProfilePageType = {
    posts: Array<PostType>
}

type DialogsPageType = {
    dialogs: Array<DialogItemType>;
    messages: Array<MessageItemType>
}

type SidebarType = {

}

export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebar: SidebarType;
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 12},
            {id: v1(), message: 'Very nice!', likesCount: 11},
            {id: v1(), message: 'It is my second post', likesCount: 10},
            {id: v1(), message: 'It is my first post', likesCount: 9},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Dimych'},
            {id: v1(), name: 'Andrey'},
            {id: v1(), name: 'Sveta'},
            {id: v1(), name: 'Sasha'},
            {id: v1(), name: 'Viktor'},
            {id: v1(), name: 'Valera'},
        ],
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'Hey'},
            {id: v1(), message: 'Yo'},
            {id: v1(), message: 'Hello'},
            {id: v1(), message: 'Bye'},
        ]
    },
    sidebar: {}
}

export default state