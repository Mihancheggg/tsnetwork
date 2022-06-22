import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {addPost, state2, updateNewPostText} from './Redux/State2';

test('renders learn react link', () => {
  render(<App state={state2} addPost={addPost} updateNewPostText={updateNewPostText}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
