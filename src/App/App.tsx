import React from 'react';
import { MainPage } from './Pages/MainPage/MainPage';
import classes from "./App.module.scss"
import { Header } from './Header/Header';
import { ERoutePath } from '../Const/ERoutePath';
import { Route, Routes } from 'react-router-dom';
import { RoutePathMap } from '../Const/RoutePathMap';
import { Footer } from './Footer/Footer';
import { MenPage } from './Pages/MenPage/MenPage';
import { WomenPage } from './Pages/WomenPage/WomenPage';
import { ProductPage } from './Pages/ProductPage/ProductPage';

const App = () => {
  return (
    <div className={classes.appContainer}>
      <Header />
      <Routes>
        <Route path={RoutePathMap[ERoutePath.main]} element={<MainPage />} />
        <Route path={RoutePathMap[ERoutePath.women]} element={<WomenPage />} />
        <Route path={RoutePathMap[ERoutePath.men]} element={<MenPage />} />
        <Route path={`/${RoutePathMap[ERoutePath.women]}/:id`} element={<ProductPage type={"women"} />} />
        <Route path={`/${RoutePathMap[ERoutePath.men]}/:id`} element={<ProductPage type={"men"} />} />
        <Route path={RoutePathMap[ERoutePath.aboutUs]} element={<div>{"About Us Page"}</div>} />
        <Route path={RoutePathMap[ERoutePath.beauty]} element={<div>{"Beauty Page"}</div>} />
        <Route path={RoutePathMap[ERoutePath.accessories]} element={<div>{"Accessories Page"}</div>} />
        <Route path={RoutePathMap[ERoutePath.blog]} element={<div>{"Blog Page"}</div>} />
        <Route path={RoutePathMap[ERoutePath.contact]} element={<div>{"Contact Page"}</div>} />
        <Route path={RoutePathMap[ERoutePath.faqs]} element={<div>{"FAQs Page"}</div>} />
        <Route path={RoutePathMap[ERoutePath.termsAndConditions]} element={<div>{"Terms & Conditions Page"}</div>} />
        <Route path={RoutePathMap[ERoutePath.returnsAndExchanges]} element={<div>{"Returns & Exchanges Page"}</div>} />
        <Route path={RoutePathMap[ERoutePath.shippingAndDelivery]} element={<div>{"Shipping & Delivery Page"}</div>} />
        <Route path={RoutePathMap[ERoutePath.privacyPolicy]} element={<div>{"Privacy Policy Page"}</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
