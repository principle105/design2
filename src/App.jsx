import React, { Suspense, lazy } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./styles/main.css"

// Importing components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Importing Pages
const HomePage = lazy(() => import("./pages/HomePage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Resources = lazy(() => import("./pages/Resources"));
const Form = lazy(() => import("./pages/Form"));

const renderLoader = () => (
  <div></div>
);

export default function App() {
  const location = useLocation();


  return (
    <>
      <div className="pseudoBody">
        <NavBar />
        <AnimatePresence exitBeforeEnter>
          <div className="content-wrapper">
            <Switch location={location} key={location.pathname}>
              <Route component={() => <Suspense fallback={renderLoader()}><HomePage /></Suspense>} exact path="/" />
              <Route component={() => <Suspense fallback={renderLoader()}><Form /></Suspense>} path="/form" />
              <Route component={() => <Suspense fallback={renderLoader()}><Resources /></Suspense>} path="/resources" />
              
              {/* 404 Page */}
              <Route component={() => <Suspense fallback={renderLoader()}><PageNotFound /></Suspense>} path="*" />
            </Switch>
            <Footer />
          </div>
        </AnimatePresence>
      </div>
    </>
  );
}