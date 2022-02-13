import React from 'react';
import { MainPage } from './Pages/MainPage/MainPage';
import classes from "./App.module.scss"
import { Header } from './Header/Header';
import { ERoutePath } from '../Const/ERoutePath';
import { Route, Routes } from 'react-router-dom';
import { RoutePathMap } from '../Const/RoutePathMap';

const App = () => {
  return (
    <div className={classes.appContainer}>
      <Header />
      <Routes>
        <Route path={RoutePathMap[ERoutePath.main]} element={<MainPage />} />
        <Route path={RoutePathMap[ERoutePath.aboutUs]} element={<div>{"About Us Page"}</div>} />
        <Route path={RoutePathMap[ERoutePath.women]} element={<div>{"Women Page"}</div>} />
        <Route path={RoutePathMap[ERoutePath.men]} element={<div>{"Men Page"}</div>} />
        <Route path={RoutePathMap[ERoutePath.women]} element={<div>{"Women Page"}</div>} />
        <Route path={RoutePathMap[ERoutePath.beauty]} element={<div>{"Beauty Page"}</div>} />
        <Route path={RoutePathMap[ERoutePath.accessories]} element={<div>{"Accessories Page"}</div>} />
        <Route path={RoutePathMap[ERoutePath.blog]} element={<div>{"Blog Page"}</div>} />
        <Route path={RoutePathMap[ERoutePath.contact]} element={<div>{"Contact Page"}</div>} />
      </Routes>
    </div>
  );
}

export default App;
