import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css';
import Contact from "./components/contactPage";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Home from "./components/homePage";
import NotFoundPage from "./components/notFoundPage";
import Service from "./components/servicePage";
import ThankYou from './components/thankYouPage';
import { ROUTES } from "./constants/routes";

const App = () => {

  return (
    <>
      <Header />
      <ToastContainer limit={1} />
      <Routes>
        <Route
          path={ROUTES?.HOME}
          element={<Home />}
        />
        <Route
          path={ROUTES?.SERVICE}
          element={<Service />}
        />
        <Route
          path={ROUTES?.GALLERY}
          element={<Gallery />}
        />
        <Route
          path={ROUTES?.CONTACT}
          element={<Contact />}
        />
        <Route
          path={ROUTES?.THANK_YOU}
          element={<ThankYou />}
        />
        <Route
          path="*"
          element={<Navigate to={ROUTES.PAGE_NOT_FOUND_ROUTE} />}
        />
        <Route path={ROUTES.PAGE_NOT_FOUND_ROUTE} element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;