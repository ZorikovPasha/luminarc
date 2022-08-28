import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Header, Footer } from "../components"

export const AppRouter = () => {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <main className="main">
          <Routes>
            {publicRoutes.map(({ path, element, exact }) => 
              <Route path={path} element={element} key={path} />
            )}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
