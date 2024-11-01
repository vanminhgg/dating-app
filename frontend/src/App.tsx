import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './auth/Login';
import Home from './Home';
import { useSelector } from 'react-redux';
import Loading from './common/Loading';

function App() {
  const isLoading  = useSelector((state: any)=> state.isLoading)
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
    <div>
      {isLoading && <Loading/>}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
