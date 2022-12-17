import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Topratednya from './toprated';

import DetailFilm from "./pages/detailfilm";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
        path: "/detail/:id",
        element: <DetailFilm/>
    },
    {
      path: "populer",
      element: <App/>
    },
    {
      path: "toprated",
      element: <Topratednya/>
    },
  ]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);


