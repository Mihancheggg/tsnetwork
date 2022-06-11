import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {dialogsData, messagesData, myPostsData} from './index';

test('renders learn react link', () => {
  render(<App myPostsData={myPostsData} messagesData={messagesData} dialogsData={dialogsData}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
