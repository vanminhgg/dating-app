import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './auth/Login';
import Home from './Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/',
      element: <Home />,
    }
    // {
    //   path: 'parent',
    //   element: <Parent />,
    //   children: [
    //     {
    //       path: 'about',
    //       element: <About />,
    //     },
    //     {
    //       path: 'contact',
    //       element: <Contact />,
    //     },
    //   ],
    // },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
