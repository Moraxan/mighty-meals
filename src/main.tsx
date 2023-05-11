import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './App'
import {RouterProvider} from "react-router-dom";
import './index.css'

export const isDevMode: boolean = true;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
);
