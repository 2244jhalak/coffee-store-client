import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AddCoffee from './AddCoffee.jsx';
import UpdateCoffee from './UpdateCoffee.jsx';
import Register from './Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './Users.jsx';
import Login from './Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch(' https://coffee-store-server-73dfvxed9-stdjhalakgmailcoms-projects.vercel.app/coffee')
  },
  {
    path:'/addCoffee',
    element:<AddCoffee></AddCoffee>
  },
  {
    path:'/updateCoffee/:id',
    element:<UpdateCoffee></UpdateCoffee>,
    loader:({params})=>fetch(` https://coffee-store-server-73dfvxed9-stdjhalakgmailcoms-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:()=>fetch(' https://coffee-store-server-73dfvxed9-stdjhalakgmailcoms-projects.vercel.app/users')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
