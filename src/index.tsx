import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import {PostType} from './Components/Profile/MyPosts/Post/Post';
import {v1} from 'uuid';
import {DialogItemType} from './Components/Dialogs/DialogItem/DialogItem';
import {MessageItemType} from './Components/Dialogs/MessageItem/MessageItem';

export let myPostsData: Array<PostType> = [
    {id: v1(), message: 'Hi, how are you?', likes: 22},
    {id: v1(), message: 'Very nice!', likes: 8},
    {id: v1(), message: 'It is my second post', likes: 19},
    {id: v1(), message: 'It is my first post', likes: 15}
]

export let dialogsData: Array<DialogItemType> = [
    {id: v1(), name: 'Vasya'},
    {id: v1(), name: 'Kate'},
    {id: v1(), name: 'Leonid'},
    {id: v1(), name: 'Alex'}
]

export let messagesData: Array<MessageItemType> = [
    {id: v1(), message: "Hi"},
    {id: v1(), message: "How are you?"},
    {id: v1(), message: "Very good"},
]

ReactDOM.render(<App myPostsData={myPostsData} dialogsData={dialogsData} messagesData={messagesData}/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
