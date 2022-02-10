import React from 'react';
import { MainPage } from './Pages/MainPage/MainPage';
import classes from "./App.module.scss"
import { Header } from './Header/Header';
import { ERoutePath } from '../Const/ERoutePath';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (

    <div className={classes.appContainer}>
      <Header />

      <Routes>
        <Route path={ERoutePath.main} element={<MainPage />} />
        <Route path={ERoutePath.aboutUs} element={<div>{"About Us Page"}</div>} />
        <Route path={ERoutePath.women} element={<div>{"Women Page"}</div>} />
        <Route path={ERoutePath.men} element={<div>{"Men Page"}</div>} />
        <Route path={ERoutePath.women} element={<div>{"Women Page"}</div>} />
        <Route path={ERoutePath.beauty} element={<div>{"Beauty Page"}</div>} />
        <Route path={ERoutePath.accessories} element={<div>{"Accessories Page"}</div>} />
        <Route path={ERoutePath.blog} element={<div>{"Blog Page"}</div>} />
        <Route path={ERoutePath.contact} element={<div>{"Contact Page"}</div>} />
      </Routes>
    </div>
  );
}

export default App;
