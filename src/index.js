import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element= {<App/>} >
      <Route index element={<Login/>} />
      <Route path='signUp' element={<SignUp/>}/>
      <Route path='home' element={<Home/>}/>
     </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < RouterProvider router={router} key={router} />
  </React.StrictMode>
);


