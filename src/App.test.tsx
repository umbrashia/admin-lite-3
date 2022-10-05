import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import fruitMartReducer from './store/slices/fruitMartSlice';

test('renders the Login screen...', () => {
  render(<App />);
  const linkElement = screen.getByText(/UserName/i);
  expect(linkElement).toBeInTheDocument();
});


test('should return the initial state', () => {
  expect(fruitMartReducer(undefined, {} as any)).toEqual(
    {
      userEmail: "shantanu@hcl.com",
      status: "done",
      defaultItems: ["Apple", "Cherry", "Guava", "Lychee", "Mango", "Star fruit"],
      userSelectedItems: []
    }
  )
})
